import React from 'react';
import { Menu, Icon, Layout, Button } from 'antd';
import styles from './Header.less'

const {Header} = Layout
const MenuItem = Menu.Item;

function HeaderMenu({
    siderFold,  // 菜单显示隐藏
    SwitchSider,
    Logout
}){
    return(
        <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Icon
                className={styles.trigger}
                type={siderFold ? 'menu-unfold':'menu-fold'}
                onClick={SwitchSider}
            />
            <Menu>
                <MenuItem key="logout" >
                    <Button  onClick={Logout}>退出登录</Button>
                </MenuItem>
            </Menu>
        </Header>
    )
}
export default HeaderMenu;