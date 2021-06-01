import { BASEURL, TIMEOUT } from './config'
import axios from 'axios'

const instance = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
})

instance.interceptors.request.use(request=>{
  return request
})

instance.interceptors.response.use(response=>{
  return response.data
},error =>{
  const status = error && error.response && error.response.status
  switch(status){
    case 400:
      console.log("请求错误");
      break;
    case 401:
      console.log("未授权访问");
      break;
    case 404:
      console.log("请求地址错误");
      break;
    default:
      console.log("其他错误信息");   
  }
})

export default instance