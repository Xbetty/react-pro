/*
 * @Author: xzt
 * @Date: 2019-12-13 13:57:34
 * @LastEditors  : xzt
 * @LastEditTime : 2019-12-21 18:05:44
 * @Description: 全局model
 * @FilePath: \react-pro\src\models\global.js
 */
export default {
    namespace: 'global',

    state: {
        siderFold: false,   // 侧边栏是否折叠
        theme: true, // 主题
        menuResponsVisible: false,  // 菜单显示隐藏
        breadcrumbList: [], // 面包屑
        selectedKeys: [], // 当前选中的菜单项 key 数组
    },

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname,query}) => {

            })
        }
    },

    effects: {

    },

    reducers: {
        // 菜单收起与展开
        SwitchSider(state) {
            return {...state, siderFold: !state.siderFold}
        },

        // 主题更改
        changeTheme(state) {
            return {...state, theme: !state.theme}
        },

        updateState(state,action) {
            console.log('state', state)
            return {...state, ...action.payload}
        }
    }
}