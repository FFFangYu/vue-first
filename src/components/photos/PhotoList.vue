<template>
    <div>
        <!-- 顶部滑动区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item._id==0?'mui-active':'']" v-for="item in cates" :key="item._id" @tap="getPhotoListByCateId(item._id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link tag="li" v-for="item in list" :key="item._id" :to="'/home/photoinfo/'+item._id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {
            cates:[],
            list:[]//图片列表
        }
    },
    created() {
        this.getAllCategory()
        this.getPhotoListByCateId(0)
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods: {
        //渲染分类列表数据
        getAllCategory(){
            this.$http.get('api/getimgcategory').then((result)=>{
                if(result.body.status == 0){
                    this.cates = result.body.message
                    this.cates.unshift({title:'全部',_id:0})
                }
            })
        },

        //获取图片列表
        getPhotoListByCateId(cateid){
            this.$http.get('api/getimages/'+cateid).then(result=>{
                if(result.body.status==0){
                    this.list=result.body.message
                }
            })
        }
    },
}
</script>
<style lang="scss">
*{
    touch-action: pan-y;
}
.photo-list{
    padding: 10px;
    margin: 0;
    padding-bottom: 0;
    li{
        list-style: none;
        text-align: center;
        background-color: #ccc;
        margin-bottom: 10px;
        box-shadow:0 0 9px #999;
        position:relative;
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            width: 100%;
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0,0.4);
            max-height: 84px;
            .info-title{
                font-size: 14px;      
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
}

</style>