<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm">
          <a href="#"
            ><span>{{ getUserNickname }} 的代辦</span></a
          >
        </li>
        <li>
          <a href="#loginPage" @click.prevent="handleLogout">登出</a>
          <!-- <router-link to="/login" class="formControls_btnLink">登出</router-link> -->
        </li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <!-- 新增待辦表單 TodoForm.vue -->
        <TodoForm @add-todo="addTodo" />
        <!-- 檢視代辦項目 TodoList.vue -->
        <TodoList v-if="todos.length !== 0" :todos="todos" @remove-todo="removeTodo" />
        <p v-else>目前尚無待辦事項。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { logout, getUserData, getTodoData, postTodoData, deleteTodoData } from '@/utils/api'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const getUserNickname = ref('')

const todos = ref([])

const addTodo = async (content) => {
  try {
    if (content.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        content,
        status: false,
      }

      todos.value.push(newTodo)
    }
    const res = await postTodoData(content)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
const removeTodo = async (id) => {
  try {
    const res = await deleteTodoData(id)
    if (todos.value.length !== 0) {
      todos.value = todos.value.filter((t) => t.id !== id)
    }
    console.log(res)
  } catch (error) {
    console.log(error)
  }
  // todos.value = todos.value.filter((t) => {
  //   return t.id !== id  // 有沒有加 return 很有差!!
  // })
}

const handleLogout = async () => {
  try {
    await logout()
    // 清除 cookie
    document.cookie = 'vue3-todolist-token=;'
    alert('您已登出。')
    router.push('/login')
  } catch (error) {
    // console.log(error)
  }
}

// 一進來頁面就驗證身份
const getUser = async () => {
  try {
    const res = await getUserData()
    getUserNickname.value = res.data.nickname
  } catch (error) {}
}

const getTodolist = async () => {
  try {
    const res = await getTodoData()
    todos.value = res.data.data
  } catch (error) {}
}

onMounted(() => {
  getUser()
  getTodolist()
})
</script>

<style lang="scss" scoped></style>
