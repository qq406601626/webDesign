export default {
    namespaced: true,
    state: {
        aside: {
            theme: {
                thumbnailyItem: {},
            },
            // todo
            elements: {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
            },
            // todo
            backgroundImg: {
                uploadUrl:'',
            }
        },
        main:{
            // 居中标题
            title:{
                show:true,
                fontSize:36, // 文字大小
                fontColor:'#ffffff', // 文字颜色
                fontBolder:true, // 文字加粗
                brand:'', // 标题商标图
                text:'测试', // 标题内容
            },
            // 左上角logo
            logo:{
                show:true,
                url:'',
            },
            // 右上角消息条数
            msgCountNumber:{
                show:true
            },
            // 右上角二维码
            qrcode:{
                show:true
            },
            // 消息内容
            msg:{
                show:true
            },
            // 底部版权
            copyright:{
                show:true
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