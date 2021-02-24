export const routes = [
    {
        path: '/hello',
        name: 'hello',
        component: () => import('../components/HelloWorld.vue'),
        children: [{
            path: 'user',
            name: '',
            component: () => import('../components/User.vue'),
        }],
    },
    {
        path: '/user',
        name: '',
        component: () => import('../components/User.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('../components/404.vue')
    }
]