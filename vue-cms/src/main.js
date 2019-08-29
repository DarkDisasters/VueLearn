//入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入自己的router.js 路由模块
import router from './router.js'

//按需导入 mint-ui 组件
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)

//导入app组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router  //挂载路由对象到实例上
})