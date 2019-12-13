/*
 * @Author: xzt
 * @Date: 2019-12-13 15:48:35
 * @LastEditors: xzt
 * @LastEditTime: 2019-12-13 17:23:15
 * @Description:
 * @FilePath: \react-pro\src\pages\home\models\index.js
 */
import * as serv from '../services/index';
export default {
  namespace: 'userInfo',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // 监听路由的变化，请求页面数据
      return history.listen(({ pathname, state }) => {
        if (pathname === '/home') {
          dispatch({ type: 'GetList' });
        }
      });
    },
  },

  effects: {
    *GetList({ payload }, { call, put, select }) {
      let res = yield call(serv.GetList);
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
