import {MobileSwiperClass,MobileBroadcastClass} from '@/scripts/index.js'

export default {
    namespaced: true,
    state: {
        aside: {
            theme: {
                themeName: ''
            }
        },
        main: {
            content: {
                children: [
                    // todo 祛class
                    // new MobileSwiperClass(['/src/views/mobile/mainComponents/img/classicsblue/banner.png','/src/views/mobile/mainComponents/img/welcomenew/banner.png'],'abc')
                    new MobileBroadcastClass()
                ]
            }
        }
    },
    getters: {},
    mutations: {},
    actions: {}
}