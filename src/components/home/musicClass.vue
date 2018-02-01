<template>
    <div id="musicClass" style="width:100%">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in bannerData" key1="index"><img :src="item.pic" alt=""></mt-swipe-item>
        </mt-swipe>
        <!-- 导航 -->
        <ul class="wy_nav">
            <li>
                <router-link to="/radioStation">
                <img src="../../assets/img/home_07.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/DailyRecommendation">
                <img src="../../assets/img/home_08.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/songSheet">
                <img src="../../assets/img/home_09.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/RankingList">
                <img src="../../assets/img/home_10.png" alt="">
                </router-link>
            </li>
        </ul>
        <div class="wyy_title">
            <p>推荐歌单&gt;</p>
        </div>
        <div class="musicList">
            <div class="content" v-for="(MList,index) in TJMusicList" key2="index"> 
                <div class="top">
                    <router-link :to="'/musicXQList/'+MList.id">
                    <img :src="MList.picUrl" alt="">
                    </router-link>
                </div>
                <p>{{MList.name}}</p>
            </div>
        </div>
        <div class="wyy_title">
            <p>独家放送&gt;</p>
        </div>
        <div class="dj">
            <div class="dj_content" v-for="item in DjList" key3="index">
                <div>
                    <router-link :to="'/Movies_BoFang/'+item.id">
                    <img :src="item.picUrl" alt="">
                    </router-link>
                </div>
                <p>{{item.name}}</p>
            </div>
        </div>
        <div class="wyy_title">
            <p>最新音乐&gt;</p>
        </div>
        <div class="musicList">
            <div class="content" v-for="(item,index) in NewMusicList" key4="index">
                <div class="top">
                    <router-link :to="'/newMusicXQList/'+item.id">
                    <img :src="item.song.album.picUrl" alt="">
                    </router-link>
                </div>
                <p>{{item.song.album.name}}</p>
            </div>
        </div>
        <div class="wyy_title">
            <p>推荐MV&gt;</p>
        </div>
        <div class="dj tjMV">
            <div class="dj_content" v-for="item in TjMvList" key5="index">
                <div>
                    <router-link :to="'/MV_xiangqing/'+item.id">
                    <img :src="item.picUrl" alt="">
                    </router-link>
                </div>
                <p>{{item.name}}</p>
                <p class="fontSize">{{item.artistName}}</p>
            </div>
        </div>
        <div class="wyy_title">
            <p>推荐电台&gt;</p>
        </div>
        <div class="musicList">
            <div class="content" v-for="(item,index) in LizedList" key6="index">
                <div class="top">
                    <img :src="item.picUrl" alt="">
                </div>
                <p>{{item.name}}</p>
            </div>
        </div>
        <a class="bottom" href="button">看视频，发现更多有趣内容</a>
        <br><br><br><br>
    </div>
</template>
<style scoped>
    .mint-swipe{
        height: 2.9rem;
        width: 100%;
        margin-top: 0.1rem;
    }
    .mint-swipe img{
        width: 100%;
    }
    .wy_nav li{
        width: 25%;
        height: 100%;
    }
    .wy_nav li img{
        width: 1.9rem;
        height: 1.5rem;
    }
    .wy_nav{
        display: flex;
        height: 2rem;
        /* background-color: red; */
        line-height: 2rem;
        border-bottom: 1px solid gray;
    }
    .musicList{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        /* margin-bottom: 1rem; */
    }
    .content{
        width: 33.3333%;
        height: 3.5rem;
        text-align: center;
    }
    .content p{
        font-size: 0.32rem;
        /* color: #666666; */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding: 0 0.2rem;
    }
    .content .top img{
        width: 2.46rem;
        height: 2.48rem;
    }
    #musicClass{
        margin-bottom: 1rem;
    }
    .dj{
       width: 100%; 
       display: flex;
       flex-wrap: wrap;
       box-sizing: border-box;
    }
    .dj>div:nth-child(3){
        width: 100%;
    }
    .dj_content{
        height: 3.2rem;
        width: 50%;
        padding: 0 0.1rem;
        box-sizing: border-box;
    }
    .dj_content img{
        display: block;
        width: 100%;
        height: 2.1rem;
    }
     .dj_content p{
          font-size: 0.32rem;
        /* color: #666666; */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding: 0 0.2rem;
     }
     .fontSize{
         color: #9999;
         font-size: 0.28rem;
     }
     .tjMV>div:nth-child(3){
         width: 50%;
     }
     .bottom{
         display: block;
         margin: 0 auto;
         text-align: center;
         margin-top: 0.2rem;
         font-size: 0.24rem;
     }
</style>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    import $ from '../../../util/axios.js';
    export default {
        name: 'musicClass',
        data() {
            return {
                bannerData:[],
                TJMusicList:[],
                DjList:[],
                NewMusicList:[],
                TjMvList:[],
                LizedList:[],
            }
        },
        created: function () {
            this.gitBanner();
            this.gitMusicList();
            this.gitDjList();
            this.gitNewMusicList();
            this.gitTjMvList();
            this.gitLizedList();
        },
        updated:function(){
        },
        methods: {
            gitBanner:function(){ //获取轮播图片
                var  $this = this;
                $.ajax('/banner').then(function(res) {
                    $this.bannerData = res.banners;
                    
                })
            },
            gitMusicList:function(){ //获取推荐歌曲
                var $this = this;
                $.ajax('/personalized').then(function(res) {
                    $this.TJMusicList = res.result;
                    // console.log($this.TJMusicList);
                })
            },
            gitDjList:function(){ //获取独家数据
                var $this = this;
                $.ajax('/personalized/privatecontent').then(function(res) { //独家放送MV缺失！
                    $this.DjList = res.result;
                })
            },
            gitNewMusicList:function(){ //获取推荐最新音乐
                var $this = this;
                $.ajax('/personalized/newsong').then(function (res) { 
                    // console.log(res);
                    $this.NewMusicList = res.result;
                })
            },
            gitTjMvList:function(){ //获取推荐MV
                var $this = this;
                $.ajax('/personalized/mv').then(function (res) { 
                    // console.log(res);
                    $this.TjMvList = res.result;
                })
            },
            gitLizedList:function(){ //获取推荐电台
                var $this = this;
                $.ajax('/personalized/djprogram').then(function (res) {
                    // console.log(res);
                    $this.LizedList = res.result;
                })
            }
        }
    }
</script>