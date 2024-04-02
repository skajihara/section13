import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      alias: ['/me'],
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog/:id*',
      alias: '/article/:id*',
      component: BlogView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      props: true,
      component: () => import('../views/NotFound.vue')
      // redirect: { name: 'home' }
    }
  ]
})

export default router
