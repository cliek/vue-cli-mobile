/*
 * @Author: your name
 * @Date: 2020-05-01 11:26:49
 * @LastEditTime: 2020-06-23 14:02:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \scnu\vue.config.js
 */ 

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 这里请修改成需要代理的地址
                target: "http://192.168.1.1:8765",
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
            args[0].title= 'vue手机端脚手架'
            return args
        })
    }
}