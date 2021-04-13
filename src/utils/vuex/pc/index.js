export default {
    namespaced: true,
    state: {
        name: 'zhangsan'
    },
    getters: {
        getName(state) {
            return state.name
        }
    },
    mutations: {
        setName(state, data) {
            state.name = data
        },
    },
    actions: {
        async fetchName({commit}) {
            const name = await new Promise(r => {
                setTimeout(() => {
                    commit('setName', 'xxxxxxxxxxxxxxxxx')
                    r()
                }, 3000)
            })
            return name
        }
    }
}