import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
import { menuArr } from '../menu/menusConfig';

const { SubMenu } = Menu;
const MenuItem = Menu.Item;

function Menus(props) {
  let { theme, selectedKeys, handleMenuSelect } = props;

  function MenuList() {
    let menuList = [];
    if (!!menuArr && menuArr.length > 0) {
      menuArr.map(menu => {
        if (menu.children && menu.children.length > 0) {
          //   有二级菜单
          menuList.push(
            <SubMenu
              key={menu.key}
              title={
                <span>
                  <Icon type={menu.icon} />
                  <span>{menu.name}</span>
                </span>
              }
            >
              {menu.children.map(subMenu => {
                return (
                  <MenuItem key={subMenu.key}>
                    <Link to={menu.key + subMenu.key}>{subMenu.name}</Link>
                  </MenuItem>
                );
              })}
            </SubMenu>,
          );
        } else {
          //   无二级菜单
          menuList.push(
            <MenuItem key={menu.key}>
              <Link to={menu.key}>
                <Icon type={menu.icon} />
                <span>{menu.name}</span>
              </Link>
            </MenuItem>,
          );
        }
      });
    }
    return menuList;
  }

  return (
    <Menu
      theme={theme ? 'light' : 'dark'}
      mode="inline"
      defaultSelectedKeys={selectedKeys || ['/home']}
      selectedKeys={selectedKeys}
      onClick={handleMenuSelect}
    >
      {MenuList()}
    </Menu>
  );
}

export default Menus;
