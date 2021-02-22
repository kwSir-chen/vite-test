import HelloWorld from '../components/HelloWorld.vue';
import User from '../components/User.vue';

export const routes = [
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld,
        children: [{
            path: 'user',
            name: '',
            component: User,
        }],
    },
    {
        path: '/user',
        name: '',
        component: User,
    },
]