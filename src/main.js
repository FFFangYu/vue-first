//JS的入口文件

import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

//Mint-UI 按需导入
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入MUI的样式表
import '../src/lib/mui/css/mui.css'
import '../src/lib/mui/css/icons-extra.css'

//导入App.vue组件
import App from './App.vue'

//导入自定义路由
import router from './router'

//VM实例的配置
var vm = new Vue({
    el:'#app',
    data:{

    },
    render:c=>c(App),
    router
})
