<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm">
          <a href="#"><span>王小明的代辦</span></a>
        </li>
        <li>
          <!-- <a href="#loginPage">登出</a> -->
          <router-link to="/login" class="formControls_btnLink">登出</router-link>
        </li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <!-- 新增待辦表單 TodoForm.vue -->
        <TodoForm />
        <!-- 檢視代辦項目 TodoList.vue -->
        <TodoList v-if="todos.length !== 0" :todos="todos" />
        <p v-else>目前尚無待辦事項。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import { ref } from 'vue'

const todos = ref([
  { id: 1, content: '把冰箱發霉的檸檬拿去丟', status: false },
  { id: 2, content: '打電話叫媽媽匯款給我', status: true },
])
</script>

<style lang="scss" scoped></style>
