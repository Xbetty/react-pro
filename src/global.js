/*
 * @Author: xzt
 * @Date: 2019-12-12 16:30:59
 * @LastEditors  : xzt
 * @LastEditTime : 2019-12-20 15:11:02
 * @Description:
 * @FilePath: \web-ac-distribution\src\global.js
 */

import '../src/utils/utils';
const env = [
  { ENV: 'formal', HOST: 'cms.aircourses.com', BASE_URL: 'https://api.aircourses.com' },
  { ENV: 'pre', HOST: '47.111.78.238:8108', BASE_URL: 'http://47.111.78.238:8087' },
  { ENV: 'test', HOST: '192.168.10.209:8108', BASE_URL: 'http://192.168.10.209:18087' },
  { ENV: 'dev', HOST: '192.168.10.202:8108', BASE_URL: 'http://192.168.10.202:18087' },
];
// 通过url判断接口BASE_URL
let _COMMON_PROPS = {};
for (let i = 0; i < env.length; i++) {
  if (env[i].HOST === window.location.host) {
    _COMMON_PROPS = env[i];
    break;
  }
}

// 通过url配置接口BASE_URL
window.BASE_URL = _COMMON_PROPS.BASE_URL || '/xzt';
