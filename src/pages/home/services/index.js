/*
 * @Author: xzt
 * @Date: 2019-12-13 15:48:47
 * @LastEditors: xzt
 * @LastEditTime: 2019-12-13 16:48:54
 * @Description: ;
 * @FilePath: \react-pro\src\pages\home\services\index.js
 */

import axios from '../../../utils/request';
export function GetList() {
  return axios.post(`${window.BASE_URL}/user/getInfos`, { page: 1, limit: 10 });
}
