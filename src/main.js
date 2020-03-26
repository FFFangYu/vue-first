//JS的入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

//Mint-UI 按需导入
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


//导入MUI的样式表
import '../src/lib/mui/css/mui.css'
import '../src/lib/mui/css/icons-extra.css'

//导入App.vue组件
import App from './App.vue'

//设置请求根路径
Vue.http.options.root='http://localhost:5000'
// 设置post 表单数据格式
Vue.http.options.emulateJSON = true;

import moment from 'moment'
//过滤器
Vue.filter('dataFormat',function(dadaStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dadaStr).format(pattern)
})

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
