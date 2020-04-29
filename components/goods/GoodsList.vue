<template>
    <div>
        <!-- <h1>shangpin</h1> -->
        <router-view></router-view>
        <router-link class="goodsBox" v-for="item in goodsList" :key="item.id" :to='"/homeContainer/goodsInfo"+"/"+item.id'> 
            <div class="goodscont" tag="div">
                <img :src="item.img_url" alt="/">
                <p>{{item.title}}</p>
            </div>
            <div class="goodsBody">
                <div class="goodsJg">
                    <span>￥{{item.now_price}}</span>
                    <span class="sp2">￥{{item.old_price}}</span>
                </div>
                <div class="goodsXs">
                    <span>热卖中</span>
                    <span>剩余{{item.own}}件</span>
                </div>
            </div>
        </router-link>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodsList:[]
        }
    },
    created() {
        this.getGoodsList();
    },
    methods: {
        getGoodsList(){
            this.$http.get('http://yapi.shangyuninfo.com/mock/121/api/goodslist?pageindex=1')
            .then(
                result=>{
                    console.log(result)
                    this.goodsList = result.body.message
                }
            )
            .catch()
        }
    },
}
</script>
<style scoped>
.goodsBox {
    width: 49%;
    height: auto;
    float: left;
    border: 2px solid #cccccc;
    margin-top: 10px;
    padding: 5px;
}
.goodscont {
    text-align: center;

}
.goodscont img {
    width: 100%;
}
.goodsBody {
    text-align: center;
    font-size: 14px;
    background-color: #cccccc;
}
.sp2 {
    
    text-decoration-line: line-through;
}
</style>