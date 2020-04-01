<template>
    <div class="goodinfo-cantainer">

        <transition 
            @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <!-- 商品 轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunboList='lunbo' :isfull='false'></swiper>
                </div>
            </div>
        </div>

        <!-- 商品购物车数据 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>{{goodinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥ {{goodinfo.sell_price}}</span>
                    </p>
                    <p>购买数量：<numbox @getCount="getSelectedCount" :max="goodinfo.stock_quantity"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addGoods">加入购物车</mt-button>
                    </p>   
                </div>
            </div>
        </div>

        <!-- 商品价格区间 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodinfo.good_no}}</p>
                    <p>库存情况：{{goodinfo.stock_quantity}} 件</p>
                    <p>上架时间：{{goodinfo.add_time | dataFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from '../subcomponents/Swiper.vue'
import numbox from '../subcomponents/goodinfo-numbox.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            lunbo:[],
            goodinfo:{},
            ballFlag:false,
            selectedCount:1
        }
    },
    created() {
        this.getlunbo()
        this.getGoodinfo()
    },
    methods: {
        getlunbo(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.lunbo = result.body.message
                }
            })
        },

        //获取商品信息
        getGoodinfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.goodinfo=result.body.message
                }
            })
        },
        goDesc(id){
            this.$router.push('/home/gooddesc/'+id)
        },
        goComment(id){
            this.$router.push('/home/goodcomment/'+id)
        },

        //点击加入购物车
        addGoods(){
            this.ballFlag = !this.ballFlag
            var goodinfo={
                id:this.id,
                count:this.selectedCount,
                price:this.goodinfo.sell_price,
                selected:true
            }

            this.$store.commit("addToCar",goodinfo)
        },

        beforeEnter(el){
            // 设置小球开始动画之前的，起始位置
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();

            const xDist = badgePosition.left-ballPosition.left
            const yDist = badgePosition.top - ballPosition.top

            // 这句话，没有实际的作用，但是，如果不写，出不来动画效果；
            // 可以认为 el.offsetWidth 会强制动画刷新
            el.offsetWidth;
            // enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all .6s cubic-bezier(.4,-0.3,1,.68)";

            el.addEventListener('transitionend', done)     
        },
        afterEnter(el){
            this.ballFlag = false
        },

        getSelectedCount(count){
            this.selectedCount=count
        }

    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="scss">
.goodinfo-cantainer{
    background-color: #eee;
    overflow: hidden;

    .now_price{
        font-size: 16px;
        color: red;
        font-weight: bold;
    }

    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }

    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        top:389px;
        left: 148px;
    }
}    
</style>