import React from 'react';
import {connect} from 'dva';

import { Layout} from 'antd';
import HeaderMenu from './layout/Header';   // 头部菜单
import SiderMenu from './layout/Sider';     // 侧边栏菜单
import styles from './index.css';

const {Content} = Layout;

function BasicLayout ({dispatch, global}) {
  let {
    namespace,
    siderFold,
  } = global

  function SwitchSider() {
    console.log('switchsider')
    dispatch({type: `${namespace}/SwitchSider`})
  }

  function Logout(){
    alert('退出登录')
  }

  let headerProps = {
    siderFold,
    SwitchSider,
    Logout
  }

  let siderProps = {
    siderFold,
  }

  return (
    <div className={styles.layout}>
      <Layout >
        <SiderMenu {...siderProps}/>
        <Layout>
          <HeaderMenu {...headerProps}/>
          <Content
              style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
              }}>
              Content
          </Content>
          </Layout>
      </Layout>
    </div>
  );
}
function mapStateToProps({global}){
  return {global};
}
export default connect(mapStateToProps)(BasicLayout);