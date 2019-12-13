import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import styles from './Sider.less';
import logo from '../../assets/yay.jpg';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderMenu({ siderFold, theme }) {
  return (
    <Sider trigger={null} collapsible collapsed={siderFold} theme={theme ? 'light' : 'dark'}>
      {/* logo */}
      <div className={styles.logo_container}>
        {siderFold ? (
          <img src={logo} className={styles.fold_logo} alt="logo" />
        ) : (
          <div>
            <img src={logo} className={styles.unfold_logo} alt="logo" />
            <span className={styles.name} style={{ color: theme ? '#1890ff' : '#fff' }}>
              投票评分管理系统
            </span>
          </div>
        )}
      </div>

      {/* 菜单 */}
      <Menu theme={theme ? 'light' : 'dark'} mode="inline" defaultSelectedKeys={['1']}>
        {/* 首页 */}
        <Menu.Item key="1">
          <Link to="/home">
            <Icon type="user" />
            <span>首页</span>
          </Link>
        </Menu.Item>

        {/* 发起评分 */}
        <SubMenu
          key="2"
          title={
            <span>
              <Icon type="mail" />
              <span>发起评分</span>
            </span>
          }
        >
          <Menu.Item key="2_1">
            <Link to="/initiate/initiateScore">发起评分</Link>
          </Menu.Item>
          <Menu.Item key="2_2">
            <Link to="/initiate/myInitiatedScore">我发起的评分</Link>
          </Menu.Item>
        </SubMenu>

        {/* 发起投票 */}
        <SubMenu
          key="3"
          title={
            <span>
              <Icon type="mail" />
              <span>发起投票</span>
            </span>
          }
        >
          <Menu.Item key="3_1">
            <Link to="/initiate/initiateVote">发起投票</Link>
          </Menu.Item>
          <Menu.Item key="3_2">
            <Link to="/initiate/myInitiatedVote">我发起的投票</Link>
          </Menu.Item>
        </SubMenu>

        {/* 我的数据 */}
        <SubMenu
          key="4"
          title={
            <span>
              <Icon type="home" />
              <span>我的数据</span>
            </span>
          }
        >
          {/* 关于评分 */}
          <Menu.ItemGroup key="4_1" title="关于评分">
            <Menu.Item key="4_1_1">
              <Link to="/projectData/vote/waitVote">待评分项目</Link>
            </Menu.Item>
            <Menu.Item key="4_1_2">
              <Link to="/projectData/score/scoredPro">已评分项目</Link>
            </Menu.Item>
            <Menu.Item key="4_1_3">
              <Link to="/projectData/score/sharedPro">我分享的项目</Link>
            </Menu.Item>
          </Menu.ItemGroup>

          {/* 关于投票 */}
          <Menu.ItemGroup key="4_2" title="关于投票">
            <Menu.Item key="4_2_1">
              <Link to="/projectData/score/scoredPro">待投票项目</Link>
            </Menu.Item>
            <Menu.Item key="4_2_2">
              <Link to="/projectData/score/scoredPro">已投票项目</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        {/* 项目统计 */}
        <SubMenu
          key="5"
          title={
            <span>
              <Icon type="mail" />
              <span>项目统计</span>
            </span>
          }
        >
          <Menu.Item key="5_1">
            <Link to="/projectStatic/scoreStatic">评分统计</Link>
          </Menu.Item>
          <Menu.Item key="5_2">
            <Link to="/projectStatic/voteStatic">投票统计</Link>
          </Menu.Item>
        </SubMenu>

        {/* 人员管理 */}
        <Menu.Item key="6">
          <Link to="/personManage">
            <Icon type="user" />
            <span>人员管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
export default SiderMenu;
