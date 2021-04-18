export default {
    namespaced: true,
    state: {
        aside: {
            thumbnailyItem: {},
        }
    },
    getters: {},
    mutations: {
        setAsideThumbnailyItem(state,data){
            state.aside.thumbnailyItem = data
        }
    },
    actions: {}
}