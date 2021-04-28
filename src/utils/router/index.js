import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/index.vue'),
            children: [
                {
                    path: 'pc',
                    components: {
                        default: () => import('@/views/pc/main.vue'),
                        aside: () => import('@/views/pc/aside.vue'),
                    }
                },
                {
                    path: 'mobile',
                    components: {
                        default: () => import('@/views/mobile/main.vue'),
                        aside: () => import('@/views/mobile/aside.vue'),
                    }                },
                {
                    path: 'test',
                    component: () => import('@/views/test.vue'),
                },
            ]
        },
    ],
})
export default router
