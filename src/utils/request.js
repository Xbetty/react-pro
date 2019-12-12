import axios from 'axios';
import { message } from 'antd';

export default {
  init() {
    // request拦截
    axios.interceptors.request.use(
      // 在发送请求之前做些什么
      function(config) {
        config.headers['x-auth-token'] = JSON.parse(localStorage.getItem('userInfo'))
          ? JSON.parse(localStorage.getItem('userInfo')).token
          : '';
        config.headers['Content-Type'] = 'application/json';
        config.headers['x-requested-with'] = 'XMLHttpRequest';
        return config;
      },
      // 对请求错误做些什么
      function(error) {
        return Promise.reject(error);
      },
    );

    // response拦截
    axios.interceptors.response.use(
      // 对响应数据做点什么
      function(response) {
        let data = response.data;
        if (data.success || data.code === '0000' || data.code === 0) {
          return Promise.resolve(data);
        } else {
          message.warning(data.message || data.msg || '请重试~');
          return Promise.reject(data);
        }
      },
      // 对相应错误做点什么
      function(error) {
          if(error.response){
              if(error.response.data.code==='0401' || error.response.status === 401) {
                  window.location.href=`${window.location.origin}/login`
              }
              return Promise.reject(error);
          }
      },
    );
  },
};
