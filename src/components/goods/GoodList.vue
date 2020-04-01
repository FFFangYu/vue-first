<template>
    <div class="good-list">
        <div class="good-item" v-for="item in goodlist" :key="item._id" @click="getGoodinfo(item._id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>还剩 {{item.stock_quantity}} 件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageindex:1,
            goodlist:[]
        }
    },
    created() {
        this.getGoodList()
    },
    methods: {
        getGoodList(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                if(result.body.status==0){
                    this.goodlist = this.goodlist.concat(result.body.message)
                }
            })
        },
        getMore(){
            this.pageindex++
            this.getGoodList()
        },
        getGoodinfo(id){
            this.$router.push('/home/goodinfo/'+id)
        }
    },
}
</script>
<style lang="scss">
.good-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .good-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 295px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>