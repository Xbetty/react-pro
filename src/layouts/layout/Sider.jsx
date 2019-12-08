import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import styles from './Sider.less';
import logo from '../../assets/yay.jpg';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderMenu({ siderFold }) {
  return (
    <Sider trigger={null} collapsible collapsed={siderFold}>
      {/* logo */}
      <div className={styles.logo_container}>
        {siderFold ? 
          <img src={logo} className={styles.fold_logo} alt="logo" />: 
          <div>
            <img src={logo} className={styles.unfold_logo} alt="logo" />
            <span className={styles.name}>xx机构名称</span>
          </div>
        }
      </div>

      {/* 菜单 */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {/* 首页 */}
        <Menu.Item key="/home">
            <Link to="/home">
                <Icon type="user" />
                <span>首页</span>
            </Link>
        </Menu.Item>

        {/* 学员列表 */}
        <SubMenu
          key="2"
          title={
              <span>
                <Icon type="mail" />
                <span>学员列表</span>
              </span>   
          }
        >
          <Menu.Item key="2_1"><Link to="/studentList/myStudent">我的学员</Link></Menu.Item>
          <Menu.Item key="2_2">推广人的学员</Menu.Item>
          <Menu.Item key="2_3">我的转介绍学员</Menu.Item>
        </SubMenu>

        {/* 兑换码 */}
        <SubMenu
          key="3"
          title={
            <span>
              <Icon type="video-camera" />
              <span>兑换码</span>
            </span>
          }
        >
          <Menu.Item key="3_1">兑换记录</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
export default SiderMenu;
