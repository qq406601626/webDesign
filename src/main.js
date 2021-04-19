import {createApp} from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './utils/router'
import store from './utils/vuex'
import App from './App.vue'
import proxyInstance from './plugins/vuexProxy'
import domHover from './plugins/domHover'
const instance = createApp(App)
instance.use(router).use(store).use(proxyInstance,store).use(domHover).use(ElementPlus, {size: 'medium ', zIndex: 3000})
instance.mount('#app')
