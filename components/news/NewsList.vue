<template>
    <div>
        <!-- <h3>我是新闻列表</h3> -->
        			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<div class="bodyTit">{{item.title}}</div>
							<p class='mui-ellipsis'>
                                <span>{{item.add_time}}</span>
                                <span>点击{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created() {
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('http://yapi.shangyuninfo.com/mock/121/api/getnewslist')
            .then(
                reault=>{
                    console.log(reault)
                    this.newsList = reault.body.message
                    // console.log(this.newsList)
                }
            )
            .catch()
        }
    }
}
</script>
<style scoped>
    .bodyTit {
        font-size: 14px;
    }
    span {
        font-size: 12px;
        color: #226aff;
    }
    span:nth-of-type(2){

        float: right;
    }
</style>