<template>
    <div>
        <!-- 轮播图 区域 -->
        <swiper :lunboList='lunboList' :isfull='true'></swiper>

        <!-- 九宫格 到 六宫格的改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../../images/a.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/b.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/c.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/d.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/e.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/f.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/Swiper.vue'
export default{
    data() {
        return {
            lunboList:[]//用来保存轮播图的数组
        }
    },
    created() {
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){
            //获取轮播图数据的方法
            this.$http.get("api/getLunbo").then(result=>{
                if(result.body.status === 0){
                    this.lunboList = result.body.message
                }
                else{
                    Toast("获取轮播图失败了")
                }
                
            })
        }
    },
    components:{
        swiper
    }
}
</script>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
</style>