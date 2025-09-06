<template>
  <!-- login_page -->
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="email"
          />
          <span v-if="email.trim() === ''">此欄位不可留空</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="password"
          />
          <input class="formControls_btnSubmit" type="button" @click="handleLogin" value="登入" />
          <RouterLink to="/register" class="formControls_btnLink">註冊帳號</RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { login } from '@/utils/api'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()

// 表單資料
const email = ref('rumi@gamil.com')
const password = ref('')

// 處理登入
const handleLogin = async () => {
  // TODO 驗證表單 ( 請輸入有效的 Email 格式 / 不可空 )

  try {
    // call login api
    const res = await login(email.value, password.value)
    const { token, exp } = res.data

    // 儲存 token
    document.cookie = `vue3-todolist-token=${token}; expires=${exp}`
    alert('登入成功')

    // 跳轉 todoist page
    router.push('/todolist')
  } catch (error) {
    alert(`發生錯誤: ${error.response.data.message}`)
  }
}
</script>

<style></style>
