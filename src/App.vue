<template>
    <div class="app-container">
        <!-- 头部 Header 区域 -->
        <mt-header fixed title="Vue-first">
            <div slot="left" @click="back" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </div>
		</mt-header>

        <!-- 中间  公共部分 -->
		<transition>
			<router-view></router-view>
		</transition>       

        <!-- 底部 Tabbar 部分 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label" >购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            flag:false
        }
    },
    created() {
        this.flag = this.$route.path === "/home" ? false :true;
    },
    methods: {
        back(){
            this.$router.back(-1)
        }
    },
    watch: {
        // 当页面刷新的时候，不会触发 watch 中监听的 路由地址的变化 如果是首页 不显示
        "$route.path": function(newVal, oldVal) {
            if (newVal === "/home") {
                this.flag = false;
            } else {
                this.flag = true;
            }
        }
    },
}
</script>

<style lang="scss">
.mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 99;
}
.app-container{
    padding-top: 40px;
    padding-bottom: 50.4px;
	overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
	
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;     	
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;

}

.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>