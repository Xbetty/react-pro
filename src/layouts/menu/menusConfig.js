/*
 * @Author: xzt
 * @Date: 2019-12-21 15:14:14
 * @LastEditors  : xzt
 * @LastEditTime : 2019-12-21 17:49:00
 * @Description: 菜单配置
 * @FilePath: \react-pro\src\layouts\menu\menusConfig.js
 */
export const menuArr = [
  {
    key: '/home',
    name: '主页',
    icon: 'layout'
  },
  {
    key: '/initiate',
    name: '发起评分',
    icon: 'layout',
    children: [
      { key: '/initiateScore', name: '发起评分' },
      { key: '/myInitiatedScore', name: '我发起的评分' },
    ],
  },
//   {
//     key: '/initiate',
//     name: '发起投票',
//     icon: 'radar-chart',
//     children: [
//       { key: '/initiateVote', name: '发起投票' },
//       { key: '/myInitiatedVote', name: '我发起的投票' },
//     ],
//   },
];
