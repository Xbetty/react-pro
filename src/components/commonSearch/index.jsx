import { Fragment, useState } from 'react';
import { Form, Input, Select, DatePicker, Cascader, Button, Icon, Drawer } from 'antd';
import styles from './index.less';
import locale from 'antd/es/date-picker/locale/zh_CN';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

/**
 * @description: 搜索组件
 * @param {array} fields - 表单组
 * @param {array} fields - 表单组
 * @param {array} btns - 按钮组
 * @return:
 */

function CommonSearch(props) {
  const [superFormVisible, setSuperFormVisible] = useState(false);

  // 属性值
  let { fields, btns, form, superVisible, superFields, OnSearch, OnReset } = props;
  let { getFieldDecorator, validateFields, resetFields } = form;

  // 表单控件集合
  let formTypes = {
    input: createInput,
    select: createSelect,
    cascader: createCascader,
    datePicker: createDatePicker,
    rangePicker: createRangePicker,
  };

  // 提交搜索
  function onSearch() {
    // let allFields = [...fields, ...superFields];
    validateFields((err, values) => {
      if (err) return;
      if (!OnSearch) {
        throw new Error('OnSearch undefined');
      } else {
        OnSearch(values);
      }
    });
  }

  // 重置搜索表单
  function onReset() {
    resetFields();
    // if (!OnReset) {
    //   throw new Error('OnReset undefined');
    // } else {
    //   OnReset();
    // }
  }

  // 显示隐藏高级搜索表单
  function toggleSuperForm() {
    setSuperFormVisible(!superFormVisible);
  }

  /**
   * @description: Input控件
   * @author： xiongziting
   * @param {object} item - 输入框组件属性对象
   * @param {string} item.key - 字段名
   * @param {array} [item.initialValue] - 默认值
   * @param {string} [item.placeholder="请输入"] - 输入框占位文本
   * @param {object} [item.style] - 自定义样式
   * @return:
   */

  function createInput(item) {
    return (
      <FormItem label={item.label}>
        {getFieldDecorator(item.key, {
          initialValue: item.initialValue || undefined,
        })(
          <Input
            className={styles.form_item_container}
            allowClear
            placeholder={item.placeholder || '请输入'}
            style={item.style}
          />,
        )}
      </FormItem>
    );
  }

  /**
   * @description: 下拉选择Select组件
   * @author: xiongziting
   * @param {object} item - 下拉框组件属性对象
   * @param {string} item.key - 字段名
   * @param {array} item.options - 选项数组
   * @param {boolean} [item.showSearch=false] - 搜索
   * @param {array} [item.initialValue] - 默认值
   * @param {boolean} [item.disabled=false]
   * @param {string} [item.placeholder="请选择"] - 输入框占位文本
   * @param {object} [item.styles] - 自定义样式
   * @return:
   */

  function createSelect(item) {
    if (!item.options) {
      // 判断options是否传入
      throw new Error('select options undefined');
    }
    if (!window.checkObjType(item.options, 'Array')) {
      // 检测options是否是数组
      throw new Error('options is not Array');
    }
    let opt_value = item.opt_value || 'value';
    let opt_label = item.opt_label || 'label';
    return (
      <FormItem label={item.label}>
        {getFieldDecorator(item.key, {
          initialValue: item.initialValue || undefined,
        })(
          <Select
            className={styles.form_item_container}
            allowClear
            optionFilterProp="children"
            notFoundContent="未找到搜索项"
            disabled={item.disabled || false}
            showSearch={item.showSearch || true}
            style={item.style}
            placeholder={item.placeholder || '请选择'}
          >
            {!!item.options &&
              item.options.length > 0 &&
              item.options.map((opt, index) => {
                return (
                  <Option key={index} value={opt[opt_value]}>
                    {opt[opt_label]}
                  </Option>
                );
              })}
          </Select>,
        )}
      </FormItem>
    );
  }

  /**
   * @description: 级联选择组件
   * @author：xiongziting
   * @param {object} item -  级联选择属性对象
   * @param {string} item.key - 字段名
   * @param {array} item.options - 可选项数据源
   * @param {object} [item.fieldNames] - 自定义字段名
   * @example { label: 'name', value: 'code', children: 'items' }
   * @param {string} [item.size="small"] - 输入框大小
   * @param {array} [item.initialValue] - 默认值
   * @param {string} [item.placeholder="请选择"] - 输入框占位文本
   * @param {object} [item.styles] - 自定义样式
   * @return:
   */

  function createCascader(item) {
    if (!item.options) {
      // options是否传入
      throw new Error('cascader options undefined');
    }
    if (!window.checkObjType(item.options, 'Array')) {
      // options是否为数组
      throw new Error('options is not Array');
    }
    return (
      <FormItem label={item.label}>
        {getFieldDecorator(item.key, {
          initialValue: item.initialValue || [],
        })(
          <Cascader
            className={styles.form_item_container}
            allowClear
            notFoundContent="未找到搜索项"
            options={item.options}
            fieldNames={item.fieldNames}
            size={item.size || 'small'}
            style={item.style}
            placeholder={item.placeholder || '请选择'}
          />,
        )}
      </FormItem>
    );
  }
  /**
   * @description: 日期选择DatePicker组件
   * @author: xiongziting
   * @param {object} item - 组件属性对象
   * @param {string} item.key - 字段名
   * @param {string} [item.format="YYYY-MM-DD HH:mm:ss"] - 日期格式
   * @param {boolean} [item.showTime=false] - 是否显示时间
   * @param {string} [item.size="default"] 控件大小
   * @param {string} [item.placeholder="请选择"] - 输入框占位文本
   * @param {object} [item.styles] - 自定义样式
   * @return:
   */

  function createDatePicker(item) {
    return (
      <FormItem label={item.label}>
        {getFieldDecorator(item.key, {
          initialValue: item.initialValue || undefined,
        })(
          <DatePicker
            className={styles.form_item_container}
            locale={locale}
            allowClear
            format={item.format || 'YYYY-MM-DD HH:mm:ss'}
            showTime={item.showTime || false}
            size={item.size || 'default'}
            style={item.style}
            placeholder={item.placeholder || '请选择'}
          />,
        )}
      </FormItem>
    );
  }

  /**
   * @description: 日期范围选择RangePicker组件
   * @author: xiongziting
   * @param {object} item - 组件属性对象
   * @param {string} item.key - 字段名
   * @param {string} [item.format="YYYY-MM-DD HH:mm:ss"] - 日期格式
   * @param {boolean} [item.showTime=false] - 是否显示时间
   * @param {string} [item.size="default"] 控件大小
   * @param {string} [item.placeholder="请选择"] - 输入框占位文本
   * @param {object} [item.styles] - 自定义样式
   * @return:
   */

  function createRangePicker(item) {
    return (
      <FormItem label={item.label}>
        {getFieldDecorator(item.key, {
          initialValue: item.initialValue || undefined,
        })(
          <RangePicker
            className={styles.form_item_container}
            locale={locale}
            allowClear
            format={item.format || 'YYYY-MM-DD HH:mm:ss'}
            showTime={item.showTime || false}
            size={item.size || 'default'}
            style={item.style}
          />,
        )}
      </FormItem>
    );
  }

  return (
    <Form layout="vertical" className={styles.form_container} {...formItemLayout} >
      {/* 基本搜索 */}
      <div className={styles.common_container}>
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
          <Button type="primary" className={styles.button} onClick={onSearch}>
            <Icon type="search" />
            搜索
          </Button>
        )}

        {/* 重置按钮 */}
        {!!fields && fields.length > 0 && (
          <Button className={styles.button} onClick={onReset}>
            <Icon type="reload" />
            重置
          </Button>
        )}
      </div>

      {/* 操作按钮组 */}
      <div className={styles.btn_container}>
        {!!btns &&
          btns.length &&
          btns.map((item, index) => {
            return (
              <Button
                className={styles.button}
                key={index}
                style={item.style}
                type={item.type || 'primary'}
                icon={item.icon || 'plus'}
                onClick={item.handleBtnClick}
              >
                {item.label || '新增'}
              </Button>
            );
          })}
        {!!superVisible && (
          <Button onClick={toggleSuperForm}>
            更多筛选
            <Icon type="double-right" />
          </Button>
        )}
      </div>

      {/* 高级搜索 */}
      {!!superFormVisible && <div className={styles.super_container}>
        <div className={styles.super_header_container}>
          <span>高级搜索</span>
          <Icon type="close" onClick={toggleSuperForm} />
        </div>
        <div className={styles.super_body_container}>
          {!!superFields && superFields.length>0 && superFields.map((item, index) => {
            if (item.key) {
              return <Fragment key={index}>{formTypes[item.type](item)}</Fragment>;
            }
            return null;
          })}
        </div>
      </div>}
    </Form>
  );
}

export default Form.create()(CommonSearch);
