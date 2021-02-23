import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { routes } from './routes'

// console.log(routes)

const router = createRouter({
//   history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//     if (!to.matched.length) {
//         next({path: '/404'})
//     } else {
//         next()
//     }
// })

export default router