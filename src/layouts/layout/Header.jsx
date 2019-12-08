import React from 'react';
import { Menu, Icon, Layout, Button } from 'antd';
import styles from './Header.less'

const { Header } = Layout
const MenuItem = Menu.Item;

function HeaderMenu({
    siderFold,                                  // 侧边栏菜单是否收起

    SwitchSider,                                // 侧边栏菜单收起与展开
    Logout                                      // 退出登录
}){
    return(
        <Header className={styles.header_container}>

            {/* 折叠图标 */}
            <Icon
                className={styles.icon}
                type={siderFold ? 'menu-unfold':'menu-fold'}
                onClick={SwitchSider}
            />

            {/* 退出登录 */}
            <Menu>
                <MenuItem key="logout" >
                    <Button  onClick={Logout}>退出登录</Button>
                </MenuItem>
            </Menu>
        </Header>
    )
}
export default HeaderMenu;