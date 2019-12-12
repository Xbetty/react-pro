// ref: https://umijs.org/config/
export default {
  treeShaking: true,
//   routes: [
//     {
//       path: '/',
//       component: '../layouts/index',
//       routes: [
//         { path: '/', component: '../pages/index' }
//       ]
//     }
//   ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'web-ac-distribution',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
      '/xzt': {
          target: 'http://111.230.19.105:3000/',
          changeOrigin: true,
          pathRewrite: {'^/xzt':''}
      }
  }
}
