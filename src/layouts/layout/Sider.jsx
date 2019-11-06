import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './Sider.less'
import logo from '../../assets/yay.jpg'
const { Sider} = Layout;
const { SubMenu } = Menu;

function SiderMenu({
    siderFold
}){
    return (
        <Sider trigger={null} collapsible collapsed={siderFold}>
            <div className={styles.institutionContainer}>
                <img src={logo} className={styles.institutionLogo} alt="logo"/>
                <span className={styles.institutionName}>xx机构名称</span>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                <Icon type="user" />
                <span>首页</span>
                </Menu.Item>
                <SubMenu
                    key="2"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>学员列表</span>
                        </span>
                    }>
                    <Menu.Item key="2_1">我的学员</Menu.Item>
                    <Menu.Item key="2_2">推广人的学员</Menu.Item>
                    <Menu.Item key="2_3">我的转介绍学员</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="3"
                    title={
                        <span>
                            <Icon type="video-camera" />
                            <span>兑换码</span>
                        </span>
                    }>
                    <Menu.Item key="3_1">兑换记录</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}
export default SiderMenu;