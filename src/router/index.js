/*
 * @Author: your name
 * @Date: 2020-05-01 11:50:57
 * @LastEditTime: 2020-06-23 14:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \scnu\src\router\index.js
 */
import VueRouter from "vue-router"
import App from "../views/"
import Index from "../views/index"
import Login from "../views/login"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            redirect: "/index",
            children: [
                {
                    path: '/index',
                    name: "index",
                    component: Index
                },
                //此处为404页面，如果输入的页面地址不存在将跳转到404
                {
                    path: '*', 
                    component: Login
                }
            ]
        },
    ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if(window.mode) return next();
    const T = localStorage.getItem('token')
    if (!to.path.includes('login')) {// 判断是否需要登录权限
        if (T) {// 判断是否登录
            next()
        } else {// 没登录则跳转到登录界面
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router;