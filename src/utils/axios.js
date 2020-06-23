import axios from "axios";
import { Toast } from "vant";

// 1.创建axios的实例
const http = axios.create({
    timeout: 20000,
    // baseURL: "http://192.168.3.110:8765"
})

// 2.axios的拦截器
// 2.1.请求拦截的作用
http.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    // 1.比如config中的一些信息不符合服务器的要求
    if (config.url.includes("oauth/token")) {
        config.headers['Authorization'] = "Basic bW9iaWxlOjEyMzQ1Ng==";
    } else {
        if (token) config.headers['Authorization'] = "Bearer " + token;
    }
    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    return config
}, err => {
    console.log(err);
})

// 2.2.响应拦截
http.interceptors.response.use(res => {
    return res.data
}, err => {
    console.log(err);
    if (err.response.status == 401) {
        localStorage.clear();
        // eslint-disable-next-line no-undef
        window.location.href = "/login"
    }
    // eslint-disable-next-line no-debugger
    if (err.message.includes("timeout")) {
        // 超时
        return Promise.reject(err);
    }
    Toast.fail(err.response.data.message);
    return Promise.reject(err.response.data.message);
})

// 3.发送真正的网络请求
export default http;
