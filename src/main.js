//JS的入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//从本地读取
var car = JSON.parse(localStorage.getItem('car')||'[]')
var store = new Vuex.Store({
    state:{
        car:car,//购物车商品的数据存储  {id：商品id， count：商品数量， price：商品单价，selected：是否选中}
    },
    mutations:{
        addToCar(state,goodinfo){
            //点击加入购物车，把商品信息保存到store
            var flag = false
            state.car.some(item=>{
                if(item.id==goodinfo.id){
                    //如果购物车里有对应商品，只需要更新数量
                    item.count += parseInt(goodinfo.count)
                    flag = true
                    return true
                }
            })

            if(!flag){
                state.car.push(goodinfo)
            }

            //实现本地存储
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodinfo){
            state.car.some(item=>{
                if(item.id == goodinfo.id){
                    item.count = parseInt(goodinfo.count)
                    return true
                }
            })

            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            //根据id 从store中的删除对应商品
            state.car.some((item,i)=>{
                if(item.id ==id){
                    state.car.splice(i,1)
                    return true
                }
            })

            localStorage.setItem('car',JSON.stringify(state.car))
        },
        // info {id,val}
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })

            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{
        getAllCount(state){
            var c = 0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        },
        //解决 从购物车中获取商品对应数量，通过返回一个对象{id:count},
        //商品id作为一个属性名，count作为值
        getGoodsCount(state){
            var o = {}
            state.car.forEach(item=>{
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state){
            var o = {}
            state.car.forEach(item=>{
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o ={
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count
                    o.amount += item.price*item.count
                }
            })
            return o
        }
    }
})

import VueResource from 'vue-resource'
Vue.use(VueResource)

//Mint-UI 按需导入
// import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// //按需加载无法体现懒加载的样式，所以需要全部导入
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入MUI的样式表
import '../src/lib/mui/css/mui.css'
import '../src/lib/mui/css/icons-extra.css'

//导入App.vue组件
import App from './App.vue'

//设置请求根路径  
//本记IP：
//Vue.http.options.root='http://192.168.124.7:5000'

Vue.http.options.root='http://182.92.75.19:5000'

// 设置post 表单数据格式
Vue.http.options.emulateJSON = true;

import moment from 'moment'
//过滤器
Vue.filter('dataFormat',function(dadaStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dadaStr).format(pattern)
})

import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
 

//导入自定义路由
import router from './router'

//VM实例的配置
var vm = new Vue({
    el:'#app',
    render:c=>c(App),
    router,   
    store,
})
