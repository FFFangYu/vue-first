<template>
    <div class="shopcar-contanier">
        <!-- 商品列表区域 -->
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])" 
                        v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
                        <img :src="item.thumb_path">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>

        <!-- 商品结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount["count"]}}</span>件，总价<span class="red">￥{{$store.getters.getGoodsCountAndAmount["amount"]}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcar-numbox.vue'
export default {
    data() {
        return {
            goodslist:[]
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            //获取购物车中商品列表
            //获取store中所有商品的id
            var idArr = []
            this.$store.state.car.forEach(item=>idArr.push(item.id))
            //console.log(idArr.toString())
            //如果购物车中没有商品，则不用请求数据接口
            if(idArr.length<=0){
                return;
            }

            this.$http.get('api/goods/getshopcarlist/'+idArr.toString()).then(result=>{
                if(result.body.status ==0){
                    this.goodslist = result.body.message
                }
            })

        },
        //删除商品，将商品从store中删除，同时根据index删除列表中的商品
        remove(id,index){
            this.goodslist.splice(index,1);
            this.$store.commit('removeFormCar',id)
        },
        selectedChanged(id,val){
            console.log(id+'---'+val)
            this.$store.commit('updateGoodsSelected',{id,selected:val})
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss">
.shopcar-contanier{
    background-color: #eee;
    overflow: hidden;

    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        
        .info{
            h1{
                font-size: 13px;
            }
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                
                color: red;
                font-weight: bold;
            }
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            font-size: 16px;
            font-weight: bold;
            color: red;
        }
    }
}  
</style>