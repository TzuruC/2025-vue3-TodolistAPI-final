import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/ToDoListView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', // catch-all route，將所有不存在的路由導回首頁
      redirect: '/',
    },
  ],
})

export default router
