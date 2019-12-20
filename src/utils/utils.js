/*
 * @Author: xzt
 * @Date: 2019-12-20 14:58:14
 * @LastEditors  : xzt
 * @LastEditTime : 2019-12-20 14:59:24
 * @Description: 全局方法
 * @FilePath: \react-pro\src\utils\utils.js
 */

// 判断对象类型
window.checkObjType = function(obj, type) {
  if (!!obj && !!type) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  } else {
    return false;
  }
};
