<template>
  <li>
    <label class="todoList_label">
      <!--  :checked="todo.status"不能雙向榜定，要用 v-model -->
      <input
        class="todoList_input"
        type="checkbox"
        value="true"
        v-model="todo.status"
        @change="patchTodoList(todo.id)"
      />
      <span>{{ todo.content }}</span>
    </label>
    <a href="#" @click.prevent="handleRemoveTodo(todo.id)">
      <i class="fa fa-times"></i>
    </a>
  </li>
</template>

<script setup>
import { patchTodoData } from '@/utils/api'
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['remove-todo'])

const handleRemoveTodo = (id) => {
  emit('remove-todo', id)
}

const patchTodoList = async (id) => {
  try {
    const res = await patchTodoData(id)
  } catch (error) {}
}
</script>

<style lang="scss" scoped></style>
