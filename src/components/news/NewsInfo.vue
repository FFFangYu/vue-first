<template>
    <div class="newsinfo-content">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dataFormat}}</span>
            <span>点击 {{newsinfo.click}} 次</span>
        </p>
        <hr>
        <div class="content">{{newsinfo.zhaiyao}}</div>

        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo:{}
        }
    },
    created() {
        this.getnewsinfo()
    },
    methods: {
        getnewsinfo(){
            this.$http.get('api/newsinfo/'+this.id).then(result=>{
                if(result.body.status == 0){
                    this.newsinfo = result.body.message
                }
            })
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>

<style lang="scss">
.newsinfo-content{
    padding: 0 4px;
    .title{
        font-size: 16px;
        color: red;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }

}
</style>