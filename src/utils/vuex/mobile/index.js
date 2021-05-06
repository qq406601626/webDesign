import {MobileSwiperClass,MobileBroadcastClass,MobileTabClass,MobileTabItemClass} from '@/scripts/index.js'
const tabItem1= new MobileTabItemClass('标签一','1','module')
tabItem1.children.push(new MobileBroadcastClass())
const tabItem2= new MobileTabItemClass('标签二','2','module')
tabItem2.children.push(new MobileSwiperClass(['/src/views/mobile/mainComponents/img/classicsblue/banner.png','/src/views/mobile/mainComponents/img/welcomenew/banner.png'],'abc'))
const tab = new MobileTabClass('','','',[tabItem1,tabItem2])

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
                    // new MobileBroadcastClass()
                    tab
                ]
            }
        }
    },
    getters: {},
    mutations: {},
    actions: {}
}