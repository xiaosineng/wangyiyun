<template>
    <div id="daily">
        <div class="tabnerr">
            <div class="left">
                <img src="../../../assets/img/chevron.png" alt="">
            </div>
            <div class="center">
                <p>每日推荐</p>
            </div>
            <router-link :to='"/musicBoFang/"+songBoFangId'>
            <div class="right">
                <img src="../../../assets/img/home_04.png" alt="">
            </div>
            </router-link>
        </div>
        <div class="title_image">
            <img src="../../../assets/img/banner2.jpg" alt="">
            <p>根据您的音乐口味生成，每天6：00更新</p>
        </div>
        <img class="nav_tj" src="../../../assets/img/tjMusic_title.png" alt="">
        <!-- 歌曲列表 -->
        <div v-for="item in playList" key='index'>
            <router-link :to='"/musicBoFang/"+item.id'>
                <div class="musicList">
                    <div class="left">{{index+1}}</div>
                    <div class="right">
                        <p>{{item.name}}</p>
                        <p>{{item.artists[0].name}}-{{item.album.name}}</p>
                    </div>
                    <div class="icon">
                        <img src="../../../assets/img/iconright.png" alt="">
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
    .tabnerr{
        height: 0.8rem;
        width: 100%;
        background-color: #c4483b;
        display: flex;
        justify-content: space-between;
       padding-left: 0.2rem;
       padding-right: 0.2rem;
       position: fixed;
       top: 0;
    }
    .tabnerr .left {
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .tabnerr .left img{
        height: 0.6rem;
    }
    .tabnerr .center p{
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.36rem;
        color: white;
    }
    .tabnerr .right {
        margin-right: 0.2rem;
    }
    .tabnerr .right img{
        height: 0.8rem;
    }
    .title_image{
        height: 3rem;
        width: 100%;
        margin-top: 0.8rem;
        position: relative;
    }
    .title_image img{
        width: 100%;
        height: 100%;
    }
    .title_image p{
        position: absolute;
        bottom: 0.3rem;
        left: 0.3rem;
        font-size: 0.3rem;
        color: white;
    }
    .nav_tj{
        width: 100%;
    }
    .musicList{
        display: flex;
        height: 1.1rem;
        position: relative;
        /* background-color: red; */
        /* border-bottom: 1px solid #999999; */
    }
    .musicList .left{
        height: 100%;
        width: 10%;
        /* background-color: skyblue; */
        line-height: 1.1rem;
        text-align: center;
    }
    .musicList .right{
        width: 80%;
        height: 100%;
        border-bottom: 1px solid #999999;
    }
    .musicList .right p:nth-child(1){
        font-size: 0.36rem;
        color: black;
        margin-top: 0.15rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .musicList .right p:nth-child(2){
        font-size: 0.24rem;
        color: #999999;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .musicList .icon{
        height: 100%;
        width: 10%;
        text-align: center;
        border-bottom: 1px solid #999999;
    }
    .musicList .icon img{
        height: 0.5rem;
        line-height: 1.1rem;
        margin-top: 0.3rem;
    }
    .span{
        position: absolute;
        top: 6.3rem;
        left: 2.2rem;
        background-color: #999999;
        color: white;
        font-size: 0.3rem;
        height: 0.4rem;
        width: 2rem;
        text-align: center;
    }
</style>
<script>
    import $ from '../../../../util/axios.js';
    export default {
        name: 'daily',
        data() {
            return {
                playList:[],
                songBoFangId: this.$store.state.songBoFangId
            }
        },
        created: function () {
            this.getTjMusicList();
        },
        methods: {
            getTjMusicList:function(){
                var $this = this;
                $.ajax('/recommend/songs').then(function (res) {
                    if(res.code == '200'){
                        console.log(res.recommend);
                        $this.playList = res.recommend;
                    }else{
                         alert('请先登陆您的账号！😙')
                        $this.$router.push({ path: '/user' })
                    }
                })
            },
        }
    }
</script>