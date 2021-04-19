export default {
    namespaced: true,
    state: {
        aside: {
            theme: {
                thumbnailyItem: {},
            },
            elements: {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
            },
            backgroundImg: {
                uploadUrl:'',
            }
        }
    },
    getters: {},
    mutations: {
        setAsideThumbnailyItem(state, data) {
            state.aside.thumbnailyItem = data
        }
    },
    actions: {}
}