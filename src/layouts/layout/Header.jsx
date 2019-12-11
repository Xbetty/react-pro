import React from 'react';
import { Menu, Icon, Layout, Switch } from 'antd';
import styles from './Header.less';

const { Header } = Layout;
const { SubMenu } = Menu;

function HeaderMenu({
  siderFold, // 侧边栏菜单是否收起

  SwitchSider, // 侧边栏菜单收起与展开
  changeTheme, // 更改主题
  theme,
  Logout, // 退出登录
}) {
  return (
    <Header className={styles.header_container}>
      {/* 折叠图标 */}
      <Icon
        className={styles.icon}
        type={siderFold ? 'menu-unfold' : 'menu-fold'}
        onClick={SwitchSider}
      />

      <Menu mode="horizontal" className={styles.header_menu}>
        {/* 主题设置 */}
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              设置
            </span>
          }
        >
          <Menu.ItemGroup title="主题设置">
            <Menu.Item key="setting">
              <Switch
                checkedChildren="亮"
                unCheckedChildren="暗"
                checked={theme}
                onChange={changeTheme}
              />
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        {/* 退出登录 */}
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="user" />
              熊子婷
            </span>
          }
        >
          <Menu.Item key="loginout">退出登录</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}
export default HeaderMenu;
