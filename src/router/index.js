import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition)
        }
        if (to.hash) {
          return resolve({
            el: to.hash,
            top: 20,
            behavior: 'smooth'
          })
        }
        return resolve({ top: 0, left: 0, behavior: 'smooth' })
      }, 1000)
    })
  }
})
router.beforeEach(async (to, from) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(to, from)
  console.log('beforeEach')
  if (to.name === 'blog') return { name: 'home' }
})

export default router
