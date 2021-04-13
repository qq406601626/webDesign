import {createApp} from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './utils/router'
import {store, storeOptions} from './utils/vuex'
import App from './App.vue'

const instance = createApp(App)
const proxyInstance = (app) => {
    // this.$store.state.pc.aside => this.pc.aside
    // this.$store.getter['pc/getAside'] => this.pc.getAside
    // this.$store.commit('pc/setAside') => this.pc.setAside
    // this.$store.dispatch('pc/fetchAside') => this.pc.fetchAside
    // console.log(store)
    Object.entries(storeOptions.modules).forEach(([moduleKey, module]) => {
        app.config.globalProperties[moduleKey] = new Proxy({}, {
            get(target, property) {
                const {state, getters, commit, dispatch} = store
                if (property in state[moduleKey]) {
                    return state[moduleKey][property]
                }
                if (`${moduleKey}/${property}` in getters) {
                    return getters[`${moduleKey}/${property}`]
                }
                if (property === 'commit') {
                    return (name, data) => {
                        commit(`${moduleKey}/${name}`, data)
                    }
                }
                if (property === 'dispatch') {
                    return async (name, data) => {
                        return await dispatch(`${moduleKey}/${name}`, data)
                    }
                }
            }
        })
    })
    app.config.globalProperties.foo='bar'
}
instance.use(router).use(store).use(proxyInstance).use(ElementPlus, {size: 'medium ', zIndex: 3000})
instance.mount('#app')
