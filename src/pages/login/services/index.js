/*
 * @Author: xzt
 * @Date: 2019-12-13 13:57:34
 * @LastEditors: xzt
 * @LastEditTime: 2019-12-13 17:08:38
 * @Description: 
 * @FilePath: \react-pro\src\pages\login\services\index.js
 */
import axios from '../../../utils/request';
export function login(form) {
    return axios.post(`${window.BASE_URL}/user/userLogin`, form)
}