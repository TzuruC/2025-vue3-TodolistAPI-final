import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

// axios 攔截器
api.interceptors.request.use((config) => {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    )
    if (token) {
        config.headers.Authorization = token
    }
    return config
})


// 註冊
export const register = async (email, password, nickname) => {
    return api.post('/users/sign_up', {
        email,
        password,
        nickname,
    })
}

// 登入
export const login = async (email, password) => {
    return api.post('/users/sign_in', {
        email,
        password,
    })
}

// 取 id
export const getUserData = async () => {
    return api.get('/users/checkout')
}

// 登出
export const logout = async () => {
    return api.post('/users/sign_out')
}

// 取得 todo
export const getTodoData = async () => {
    return api.get('/todos/')
}

// 上傳 todo
export const postTodoData = async (content) => {
    return api.post('/todos/', {
        content,
    })
}

// 刪除 todo
export const deleteTodoData = async (id) => {
    return api.delete(`/todos/${id}`)
}

// 編輯 todo 狀態
export const patchTodoData = async (id) => {
    return api.patch(`/todos/${id}/toggle`, `${id}`)
}