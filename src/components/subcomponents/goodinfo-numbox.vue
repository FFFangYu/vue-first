<template>
    <!-- 因为从父组件传值来的max是通过异步操作才获取的，但真正执行时，可能还没有获得max值，故此时max为undifined -->
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" ref="numbox" value="1"
        @change="countchanged" />
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
            //每当文本框数据发生改变，立即通过事件调用传递给父组件
            this.$emit("getCount",parseInt(this.$refs.numbox.value))
        }
    },
    props:['max'],
    watch: {
        //使用JS API 设置numbox的max
        'max':function(newVal,oldVal){
            mui('.mui-numbox').numbox().setOption('max',newVal)
        }
    },
}
</script>

<style lang="scss">
    
</style>