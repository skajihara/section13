import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { transition: 'fade' },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      meta: { requiredAuth: true, transition: 'slide' },
      component: () => import('../views/BlogView.vue'),
      beforeEnter() {
        console.log('beforeEnter')
      }
    }
  ]
})
router.beforeEach(() => {
  console.log('beforeEach')
})
router.beforeResolve(() => {
  console.log('beforeResolve')
})
router.afterEach(() => {
  console.log('afterEach')
})
export default router
