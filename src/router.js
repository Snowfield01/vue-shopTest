import Vue from '../node_modules/vue/dist/vue.min.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/GoodsInfo.vue'
let router = new VueRouter({
    routes: [
        { path: '/', component: HomeContainer },
        { path: '/homeContainer', component: HomeContainer, },
        { path: '/memberContainer', component: MemberContainer },
        { path: '/searchContainer', component: SearchContainer },
        { path: '/shopcarContainer', component: ShopcarContainer },
        { path: '/homeContainer/newsList', component: NewsList },
        { path: '/homeContainer/goodsList', component: GoodsList },
        { path: '/homeContainer/goodsInfo/:id', component: GoodsInfo }

    ],
    linkActiveClass: 'mui-active'
})

export default router