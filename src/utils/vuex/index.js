import {createStore} from 'vuex'
import modules from './modules'

const storeOptions = {
    strict: true,
    modules
}
const store = createStore(storeOptions)
export default store