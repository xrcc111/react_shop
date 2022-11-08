import axios from "axios"

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 1000 * 30
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
}
)

// 添加响应拦截器
service.interceptors.response.use((response) => {
  const { data, status } = response
  if (status === 200) return data
  // config设置responseType为blob 处理文件下载
},(error) => {
  // 可添加错误提示后续补充
  return Promise.reject(error)
})

export default service