import {connect} from 'dva';
import { Form, Input, Icon, Button } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

function login({ form, dispatch, nLogin }) {
  const { getFieldDecorator, validateFields } = form;
  console.log('Login', nLogin)

//   let {namespace} = login;

  //   登录
  function handleSubmit() {
    validateFields((err, values) => {
      if (!err) {
        console.log(values, nLogin, 'values');
        dispatch({type: 'nLogin/login', payload: values})
      }
    });
  }

  return (
    <div className={styles.login_container}>
      <Form className={styles.form_container}>
        <div className={styles.title}>投票评分管理系统</div>
        {/* 用户名 */}
        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="phone"
            />,
          )}
        </FormItem>

        {/* 密码 */}
        <Form.Item>
          {getFieldDecorator('pwd', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="passpwdword"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        {/* 登录 */}
        <Form.Item>
          <Button type="primary" style={{ width: '100%' }} onClick={handleSubmit}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

function mapStateToProps({nLogin}){
    return {nLogin}

}
export default connect(mapStateToProps)(Form.create()(login));
