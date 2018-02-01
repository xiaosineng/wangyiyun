<template>
    <div id="songsheet">
        <div class="title">
            <div class="left" @click='getBack()'><img src="../../../assets/img/chevron.png" alt=""></div>
            <div class="center">歌单</div>
            <router-link :to='"/musicBoFang/"+songBoFangId'>
            <div class="right"><img src="../../../assets/img/home_04.png" alt=""></div>
            </router-link>
        </div>
        <div class="nav">
            <div class="left"><img :src="urlImg" alt=""></div>
            <div class="right">
                <h3>精品歌单&nbsp;<img src="../../../assets/img/iconright.png" alt=""></h3>
                <p class="p1">{{urlName}}</p>
                <p class="p2">{{urlDescription}}</p>
            </div>
        </div>
        <div class="playList">
            <div class="content" v-for="item in playList">
                <div class="top">
                    <router-link :to="'/musicXQList/'+item.id">
                    <img :src='item.coverImgUrl' alt="">
                    </router-link>
                </div>
                <div class="foot">
                    <p>{{item.name}}</p>
                </div>
                <p class="p1">{{item.creator.nickname}}</p>
                <p class="p2">{{item.playCount}}</p>
            </div>
            <div class="content" v-for="item in playListAdd">
                <div class="top">
                    <router-link :to="'/musicXQList/'+item.id">
                        <img :src='item.coverImgUrl' alt="">
                    </router-link>
                </div>
                <div class="foot">
                    <p>{{item.name}}</p>
                </div>
                <p class="p1">{{item.creator.nickname}}</p>
                <p class="p2">{{item.playCount}}</p>
            </div>
        </div>
        <div class="onloding" @click='getAddPlay()'>加载更多</div>
    </div>
</template>
<style scoped>
    .title{
        height: 0.8rem;
        width: 100%;
        background-color: #c4483b;
        display: flex;
        justify-content: space-between;
        padding: 0 0.1rem;
        position: fixed;
        top: 0;
        z-index: 9999;
    }
    .title .center{
        height: 100%;
        line-height: 0.8rem;
        font-size: 0.36rem;
        color: white;
    }
    .title .left,.title .right{
        height: 0.8rem;
        width: 0.8rem;
    }
    .title .left img,.title .right img{
        height: 100%;
        width: 100%;
    }
    .nav{
        height: 2.9rem;
        width: 100%;
        background-color: #695d51;
        position: fixed;
        top:0.8rem;
        display: flex;
        z-index: 9999;
    }
    .nav .left{
        width: 2rem;
        height: 2rem;
        background-color: red;
        margin-left: 0.2rem;
        margin-top: 0.6rem;
    }
    .nav .left img{
        width: 100%;
        height: 100%;
    }
    .nav .right{
        height: 100%;
        flex: 1;
        /* background-color: red; */
        padding: 0 0.2rem;
        padding-top: 0.6rem;
        box-sizing: border-box;
    }
    .nav .right h3{
        font-size: 0.36rem;
    }
    .nav .right .p1{
        font-size: 0.3rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .nav .right .p2{
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .playList{
        display: flex;
        margin-top: 3.8rem;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .content{
        /* height: 4rem; */
        width: 49.5%;
        position: relative;
        /* border: 1px solid #999; */
        /* box-shadow: 0px 0px 10px; */
    }
    .content .p1{
        position: absolute;
        top: 3rem;
        left:0.2rem;
        /* color: #c4483b; */
        color: white;
    }
    .content .p2{
        position: absolute;
        top: 0;
        right:0.2rem;
        /* color: skyblue; */
        font-weight: 700;
        color: white;
    }
    .content .top{
        height: 3.5rem;
        width: 100%;
    }
    .content .top img{
        width: 100%;
        height: 100%;
    }
    .content .foot{
        width: 100%;
        height: 1rem;
        /* background-color: #c4483b; */
    }
    .content .foot p{
        font-size: 0.36rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .onloding{
        height: 0.8rem;
        width: 3rem;
        background-color: skyblue;
        margin: 0 auto;
        font-size: 0.36rem;
        color: white;
        text-align: center;
        line-height: 0.8rem;
    }
</style>
<script>
    import $ from '../../../../util/axios.js';
    export default {
        name: 'songsheet',
        data() {
            return {
                playList:[],
                urlImg: '',
                urlName:'',
                urlDescription:'',
                playNum:1,
                playListAdd:[],
                songBoFangId: this.$store.state.songBoFangId
            }
        },
        created: function () {
            this.getPlayList();
            this.getPlayAdd();
        },
        methods: {
            getPlayList:function(){
                var $this = this
                $.ajax('/top/playlist').then(function (res) {
                    $this.playList = res.playlists;
                 })
            },
            getBack:function(){
                this.$router.go(-1)
            },
            getAddPlay:function(){
                this.playNum += 10;
                this.getPlayAdd();
            },
            getPlayAdd:function(){
                 var $this = this
                $.ajax('/top/playlist/highquality?limit='+this.playNum).then(function (res) {
                    $this.playListAdd = res.playlists;
                    $this.urlImg = res.playlists[0].coverImgUrl;
                    $this.urlName = res.playlists[0].name;
                    $this.urlDescription = res.playlists[0].description;
                })
            }
        }
    }
</script>