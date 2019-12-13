/*
 * @Author: xzt
 * @Date: 2019-12-12 16:17:35
 * @LastEditors: xzt
 * @LastEditTime: 2019-12-13 17:24:30
 * @Description:
 * @FilePath: \web-ac-distribution\src\pages\login\model\index.js
 */
import * as serv from '../services/index';
import router from 'umi/router';
export default {
  namespace: 'nLogin',

  state: {
    namespace: 'nLogin',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // 监听路由的变化，请求页面数据
      return history.listen(({ pathname, state }) => {
        if (pathname === 'login') {
        }
      });
    },
  },

  effects: {
    // 登录
    *login({ payload }, { call, put, select }) {
      let res = yield call(serv.login, payload);
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      router.push('/home');
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
