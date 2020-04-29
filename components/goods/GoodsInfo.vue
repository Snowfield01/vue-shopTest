<template>
  <div>
    <!-- <h1>商品详情</h1> -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>
    <!-- loop -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
              <img :src="item.img_url" alt />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="mui-card">
      <div class="mui-card-header">商品标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <del>市场价￥999</del>
            <span>销售价￥9.99</span>
          </p>
          <p>
            <span>
              购买数量:
              <numbox @getCount = 'getSelectedCount'></numbox>
            </span>
          </p>
          <p>
            <mt-button type="primary" size="small">点击购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 其他 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:</p>
          <p>库存情况:</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
import numbox from "../Goodsnum/GoodsNum.vue";
export default {
  data() {
    return {
      lunbotuList: [],
      flag: false,
      selectCount:1
    };
  },
  created() {
    this.getGoodsLoop();
  },
  methods: {
    getGoodsLoop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop_1587914991785")
        .then(result => {
          this.lunbotuList = result.body.message;
        })
        .catch();
    },
    addShopCar() {
      this.flag = !this.flag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth; 
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document.getElementById('badge').getBoundingClientRect();
      const xPosition = badgePosition.left-ballPosition.left
      const yPosition =  badgePosition.top-ballPosition.top

      el.style.transform = `translate(${xPosition}px,${yPosition}px)`;
      el.style.transition = "all 0.5s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    getSelectedCount(count){
        this.selectCount = count
        console.log('父组件的拿到值：'+this.selectCount)
    }
  },
  components: {
    numbox
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}

.ball {
  width: 14px;
  height: 14px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 390px;
  left: 138px;
  z-index: 10;
}
</style>>
