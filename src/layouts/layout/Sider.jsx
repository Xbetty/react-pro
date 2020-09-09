import React from 'react';
import { Layout } from 'antd';
import styles from './Sider.less';
import logo from '../../assets/yay.jpg';
import Menus from '../menu/Menus';

const { Sider } = Layout;

function SiderMenu({ siderFold, theme, selectedKeys,handleMenuSelect }) {
  const menusProp = {
    theme,
    selectedKeys,
    handleMenuSelect
  };
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
              Xbetty的后台系统
            </span>
          </div>
        )}
      </div>
      <Menus {...menusProp} />
    </Sider>
  );
}
export default SiderMenu;
