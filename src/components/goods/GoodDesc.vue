<template>
    <div class="gooddesc-container">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content">{{info.content}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info:{}
        }
    },
    created() {
        this.getGoodDesc()
    },
    methods: {
        getGoodDesc(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result=>{
                if(result.body.status==0){
                    this.info = result.body.message
                }
            })
        }
    },
}
</script>
<style lang="scss">
.gooddesc-container{
    h3{
        font-size: 16px;
        color: #26a2ff;
        margin: 15px 0;
        text-align: center;
    }
    .content{
        padding:0 10px;
        color: #ccc;
        line-height: 26px;
        font-size: 14px;
    }
}    
</style>