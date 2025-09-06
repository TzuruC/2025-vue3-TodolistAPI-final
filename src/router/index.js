import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from 'src/views/RegisterView.vue'
import TodoListView from '../views/TodoListView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoListView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/:pathMatch(.*)*', // catch-all route，將所有不存在的路由導回首頁
      redirect: '/',
    },
  ],
})

export default router
