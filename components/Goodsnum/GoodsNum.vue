<template>
  <div class="goodsNum">
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value='1' ref="numbox" @change="getCount" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    
    methods: {
        getCount(){
          // 1.获取 numbox 的value值
          this.$refs.numbox.value
          // console.log(this.$refs.numbox.value)
          // 2.通过￥emit 方法 联系父组件  第一个参数是方法名 第二个参数是在子组件的的获取值
          this.$emit('getCount',parseInt(this.$refs.numbox.value))
          // 3.在父组件定义一个方法 getSelectedCount 用来获取值
          // 4.在父组件中子组件的 标签那绑定一个方法 和子组件中$emit 参数一对相应 即为 @getCount = 'getSelectedCount' 
        }
    },
    mounted() {
        this.mui('.mui-numbox').numbox()
    },
}
</script>
<style scoped>
    .goodsNum {
        display: inline-block;
    }
</style>