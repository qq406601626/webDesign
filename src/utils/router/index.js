import { createRouter, createWebHashHistory } from 'vue-router'
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
                    component: () => import('@/views/pc/index.vue'),
                },
                {
                    path: 'mobile',
                    component: () => import('@/views/mobile/index.vue'),
                },
            ]
        },
    ],
})
export default router
