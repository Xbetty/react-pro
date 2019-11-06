export default {
    namespace: 'global',

    state: {
        siderFold: false,   // 侧边栏是否折叠
        menuResponsVisible: false,  // 菜单显示隐藏
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
            console.log('state', state)
            return {...state, siderFold: !state.siderFold}
        },
        updateState(state,action) {
            return {...state, ...action.payload}
        }
    }
}