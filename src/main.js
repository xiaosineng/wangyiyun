import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import VueRouter from 'vue-router'
import './assets/lib/flexible';  //屏幕自适应
import 'mint-ui/lib/style.css' //mintui的css
import  './assets/css/base.css' //公共css样式
import $ from '../util/axios'; //axios
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(Mint);

import home from './components/home/home.vue'  //-------------1，主页
import musicClass from './components/home/musicClass.vue'  //音乐分类
import musicXQList from './components/base/Music_xiangqing.vue' //音乐详情列表
import newMusicXQList from './components/base/Music_newMusicXQ.vue' //最新音乐详情列表
import musicBoFang from './components/base/Music_boFang.vue'  //音乐播放
import Movies_BoFang from './components/base/Movies_BoFang.vue' //MV播放
import MV_xiangqing from './components/base/MV_xiangqing.vue' //MV详情

import DailyRecommendation from './components/home/musicClass/DailyRecommendation.vue' //每日推荐
import radioStation from './components/home/musicClass/radioStation.vue'  //电台
import RankingList from './components/home/musicClass/RankingList.vue'  //排行榜
import songSheet from './components/home/musicClass/songSheet.vue'  //歌单

import moviesClass from './components/home/moviesClass.vue'  //视频分类
import radioClass from './components/home/radioClass.vue'

import myMusic from './components/myMusic/myMusic.vue' //--------------2，我的音乐
import recordList from './components/myMusic/recordList.vue' //历史播放列表



import friend from './components/friend/friend.vue'  //----------------3，盆友
import user from './components/user/users.vue'    //---------------4，我的



// 定义路由
const routes = [
  { path: "/", redirect: "/home" },//重定向,指向了home组件
  {
    path: '/home',
    component: home,
    children:[
      { path: '/', component: musicClass },
      { path: 'musicClass', component: musicClass},
      { path: 'moviesClass', component: moviesClass },
      { path: 'radioClass', component: radioClass },
    ]
  },
  { path: '/myMusic', component: myMusic },
  { path: '/friend', component: friend },
  { path: '/user', component: user },
  { path: '/musicXQList/:muiscId', component: musicXQList },
  { path: '/newMusicXQList/:newMuiscId', component: newMusicXQList },
  { path: '/musicBoFang/:musicBFid', component: musicBoFang },
  { path: '/Movies_BoFang/:MovieID', component: Movies_BoFang },
  { path: '/MV_xiangqing/:MVID', component: MV_xiangqing },
  { path: '/radioStation', component: radioStation },
  { path: '/DailyRecommendation', component: DailyRecommendation },
  { path: '/songSheet', component: songSheet },
  { path: '/RankingList', component: RankingList },
  { path: '/recordList/:userId', component: recordList },
]
// 创建实例
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router, //挂载路由
  store,//vuex
  el: '#app',
  render: h => h(App)
})
