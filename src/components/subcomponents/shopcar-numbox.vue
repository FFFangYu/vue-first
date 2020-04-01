<template>
    <!--  -->
    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" ref="numbox" :value="initCount"
        @change="countchanged" readonly />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted() {
        mui('.mui-numbox').numbox()
    },
    methods: {
        countchanged(){
            this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:this.$refs.numbox.value})
        }
    },
    props:['initCount','goodsid']

}
</script>

<style lang="scss">
    
</style>