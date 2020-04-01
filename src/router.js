import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodList from './components/goods/GoodList.vue'
import GoodInfo from './components/goods/GoodInfo.vue'
import GoodDesc from './components/goods/GoodDesc.vue'
import GoodComment from './components/goods/GoodComment.vue'

var router = new VueRouter({
    routes:[//配置路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photoinfo/:id',component:PhotoInfo},
        {path:'/home/goodslist',component:GoodList},
        {path:'/home/goodinfo/:id',component:GoodInfo},
        {path:'/home/gooddesc/:id',component:GoodDesc},
        {path:'/home/goodcomment/:id',component:GoodComment}
    ],
    linkActiveClass:"mui-active"//覆盖默认的路由高亮类
})

export default router