import { Fragment } from 'react';
import { Form, Input, Cascader, Button, Icon } from 'antd';
import styles from './index.less';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
/**
 * @description:
 * @param {Array} fields - 表单组
 * @param {Array} fields - 表单组
 * @param {Array} btns - 按钮组
 *
 * @return:
 */
function CommonSearch(props) {
  const FormItem = Form.Item;

  let { fields, btns, form } = props;
  let { getFieldDecorator } = form;

  // 表单控件集合
  let formTypes = {
    input: createInput,
    cascader: createCascader,
  };

  /**
   * @description: 输入框组件
   * @author： xiongziting
   * @param {object} item - 输入框组件属性对象
   * @param {string} item.key - 字段名
   * @param {array} [item.initialValue] - 默认值
   * @param {string} [item.placeholder="请选择"] - 输入框占位文本
   * @param {object} [item.styles] - 自定义样式
   * @return:
   */
  // 创建Input组件
  function createInput(item) {
    return (
      <FormItem>
        {getFieldDecorator(item.key, {
          initialValue: item.initialValue || undefined,
        })(<Input placeholder={item.placeholder || '请输入'} style={item.style} />)}
      </FormItem>
    );
  }

  /**
   * @description: 级联选择组件
   * @author：xiongziting
   * @param {object} item -  级联选择属性对象
   * @param {array} item.options - 可选项数据源
   * @param {object} [item.fieldNames] - 自定义字段名
   * @example { label: 'name', value: 'code', children: 'items' }
   * @param {string} [item.size="small"] - 输入框大小
   * @param {array} [item.initialValue] - 默认值
   * @param {string} [item.placeholder="请选择"] - 输入框占位文本
   * @param {object} [item.styles] - 自定义样式
   * @return:
   */
  // 创建级联选择
  function createCascader(item) {
    if (!item.options) {
      // options是否传入
      throw new Error('cascader options undefined');
    }
    if (!window._COM_FUNC.isType('Array')(item.options)) {
      // options是否为数组
      throw new Error('options is not Array');
    }
    let { getFieldDecorator } = this.props.form;
    return (
      <FormItem>
        {getFieldDecorator(item.key, {
          initialValue: item.initialValue || [],
        })(
          <Cascader
            allowClear
            notFoundContent="未找到搜索项"
            options={item.options}
            fieldNames={item.fieldNames}
            size={item.size || 'small'}
            style={item.styles}
            placeholder={item.placeholder || '请选择'}
          />,
        )}
      </FormItem>
    );
  }

  return (
    <Form layout="vertical" className={styles.container}>
      {/* 搜索表单 */}
      {!!fields &&
        fields.length > 0 &&
        fields.map((item, index) => {
          if (item.key) {
            return <Fragment key={index}>{formTypes[item.type](item)}</Fragment>;
          }
          return null;
        })}

      {/* 搜索按钮 */}
      {!!fields && fields.length > 0 && (
        <Button type="primary" className={styles.button}>
          <Icon type="search" />
          搜索
        </Button>
      )}

      {/* 重置按钮 */}
      {!!fields && fields.length > 0 && (
        <Button className={styles.button}>
          <Icon type="reload" />
          重置
        </Button>
      )}
    </Form>
  );
}

export default Form.create()(CommonSearch);
