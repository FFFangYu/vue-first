<template>
   <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item._id">
                <router-link :to="'/home/newsinfo/'+item._id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.add_time | dataFormat}}</span>
                            <span>点击 {{item.click}} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div> 
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newslist:[]
        }
    },
    created() {
        this.getnewsList()
    },
    methods: {
        getnewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status == 0){
                    this.newslist = result.body.message
                }else{
                    Toast("新闻资讯列表获取失败")
                }
            })
        }
    },
}
</script>

<style lang="scss">
.mui-table-view{
    h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}    
</style>