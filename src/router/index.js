import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import PostsView from '../views/PostsView.vue'
import LikesView from '../views/LikesView.vue'
import NewsView from '../views/NewsView.vue'
import PeopleYouMayKnow from '../views/PeopleYouMayKnow.vue'
import HomeFooter from '../views/HomeFooter.vue'
import ProfileFooter from '../views/ProfileFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Sidebar: NewsView,
        Footer: HomeFooter
      }
    },
    {
      path: '/:id',
      components: {
        default: ProfileView,
        Sidebar: PeopleYouMayKnow,
        Footer: ProfileFooter
      },
      children: [
        {
          path: '',
          name: 'posts',
          component: PostsView
        },
        {
          path: 'likes',
          name: 'likes',
          component: LikesView
        }
      ]
    }
  ]
})
export default router
