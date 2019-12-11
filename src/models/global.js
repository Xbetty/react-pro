export default {
    namespace: 'global',

    state: {
        siderFold: false,   // 侧边栏是否折叠
        theme: true, // 主题
        menuResponsVisible: false,  // 菜单显示隐藏
        breadcrumbList: ['App','List', 'Page'], // 面包屑
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
            return {...state, ...action.payload}
        }
    }
}