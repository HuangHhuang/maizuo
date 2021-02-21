import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1612619294352432131407873","bc":"310100"}' }
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
  // 显示加载中
  Toast.loading({
    message: '加载中...',
    forbidClick: true
  })

  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  Toast.clear()
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default http
