import {createStore} from 'vuex'
import PC from './pc'

const storeOptions = {
    strict: true,
    modules: {
        PC
    }
}
const store = createStore(storeOptions)
export {store, storeOptions}