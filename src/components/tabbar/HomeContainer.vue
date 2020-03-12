<template>
    <div>
        <!-- 轮播图 区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 到 六宫格的改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/a.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/b.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/c.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
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
export default{
    data() {
        return {
            lunboList:[]//用来保存轮播图的数组
        }
    },
    created() {
        //this.getLunbotu()
    },
    methods: {
        getLunbotu(){
            //获取轮播图数据的方法
            // this.$http.get("http://vue.studyit.io/api/getLunbo").then(result=>{
            //     console.log(result.body)
            // })
        }
    },
}
</script>
<style lang="scss">
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: green;
        }
        &:nth-child(3){
            background-color: blue;
        }
    }
}
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