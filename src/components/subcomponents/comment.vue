<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容（不超过120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item._id">
                <div class="cmt-title">第{{i+1}}楼用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            pageIndex:1,//默认展示第一页评论
            comments:[],
            msg:''//评论输入的内容
        }
    },
    created() {
        this.getcomments()
    },
    methods: {
        getcomments(){//获取评论
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result=>{
                if(result.body.status==0){
                    this.comments = this.comments.concat(result.body.message)
                }
            })
        },
        getMore(){//加载更多
            this.pageIndex++
            this.getcomments()
        },
        postComment(){//发表评论
            //参数1：请求的URL地址
            //参数2：提交给服务器的数据对象{content：this.msg}
            //参数3：定义提交时候，表单中的数据格式 {emulateJSON:true}

            //校验 评论内容
            if(this.msg.trim().length==0){
                return Toast("评论对象不能为空")
            }

            this.$http.post("api/postcomment/"+this.$route.params.id,{
                content:this.msg.trim()
            }).then(result=>{
                if(result.body.status==0){
                    //拼接一个评论对象
                    let cmt = {
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim()
                    }
                    this.comments.unshift(cmt)
                    this.msg=""
                }
            })
        }
    },
    props:["id"]
    
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                height: 30px;
                line-height: 30px;
            }
            .cmt-body{
                height: 35px;
                line-height: 35px;
                text-indent: 2em,;
            }
        }
    }

}
</style>