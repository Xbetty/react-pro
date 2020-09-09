/*
 * @Author: xzt
 * @Date: 2019-12-21 15:14:14
 * LastEditors: xiongziting
 * LastEditTime: 2020-09-09 11:01:55
 * @Description: 菜单配置
 * FilePath: /react-pro/src/layouts/menu/menusConfig.js
 */
export const menuArr = [
  {
    key: '/home',
    name: '主页',
    icon: 'layout',
  },
  {
    key: '/demo',
    name: 'DEMO',
    icon: 'layout',
    children: [{ key: '/canvas', name: 'canvas绘图' }],
  },
];
