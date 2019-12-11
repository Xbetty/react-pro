import React from 'react';
import { connect } from 'dva';

import { Layout, Breadcrumb } from 'antd';
import HeaderMenu from './layout/Header'; // 头部菜单
import SiderMenu from './layout/Sider'; // 侧边栏菜单
import styles from './index.less';
import Login from '../pages/login/index';

const { Content } = Layout;

function BasicLayout({ dispatch, global, children, location }) {
  let {
    // namespace,
    siderFold,
    theme,
    breadcrumbList,
  } = global;

  // 菜单折叠
  function SwitchSider(checked) {
    dispatch({ type: 'global/SwitchSider' });
  }

  //   主题修改
  function changeTheme() {
    dispatch({ type: 'global/changeTheme' });
  }

  // 退出登录
  function Logout() {
    alert('退出登录');
  }

  // 头部导航属性
  let headerProps = {
    siderFold,
    theme,
    SwitchSider,
    changeTheme,
    Logout,
  };

  // 侧边栏导航属性
  let siderProps = {
    siderFold, // 侧边栏菜单是否收起
    theme,
  };
  
  if(location.pathname==='/login'){
      return <Login/>
  }

  return (
    <div className={styles.layout_container}>
      <Layout>
        {/* 侧边栏导航 */}
        <SiderMenu {...siderProps} />

        <Layout>
          {/* 头部导航 */}
          <HeaderMenu {...headerProps} />

          {/* 面包屑 */}
          <Breadcrumb className={styles.breadcrumb_container}>
            {breadcrumbList.map((item, index) => {
              return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
            })}
          </Breadcrumb>

          {/* 内容 */}
          <Content className={styles.content_container}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}
function mapStateToProps({ global }) {
  return { global };
}
export default connect(mapStateToProps)(BasicLayout);
