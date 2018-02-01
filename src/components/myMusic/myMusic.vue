<template>
    <div id="myMusic">
         <div class="title">
            <div class="left" @click='getBack()'><img src="../../assets/img/chevron.png" alt=""></div>
            <div class="center">我的音乐</div>
            <div class="right"><img src="../../assets/img/home_04.png" alt=""></div>
        </div>
        <ul class="nav_contaier">
            <li><img src="../../assets/img/my_02.png" alt="">本地音乐<span>0</span></li>
            <router-link :to='"/recordList/"+userId'>
            <li><img src="../../assets/img/my_04.png" alt="">最近播放<span>{{recordList.length}}</span></li>
            </router-link>
            <li><img src="../../assets/img/my_05.png" alt="">我的电台<span>{{dj}}</span></li>
            <li><img src="../../assets/img/my_06.png" alt="">我的收藏<span>数据无法获取</span></li>
        </ul>
        <div class="nav_title">
            <p>我创建的歌单（{{playList_1.length}}）</p>
        </div>
         <ul class="nav_contaier2">
           
            <li v-for="item in playList_1">
                <router-link :to="'/musicXQList/'+item.id">
                <img :src="item.coverImgUrl" alt="">&nbsp;&nbsp;&nbsp;{{item.name}}&nbsp;&nbsp;<span>{{item.trackCount}}首</span>
                </router-link>
            </li>
        </ul>
        <div class="nav_title">
            <p>我收藏的歌单（{{playList_2.length}}）</p>
        </div>
         <ul class="nav_contaier2">
            <li v-for="item in playList_2">
                <router-link :to="'/musicXQList/'+item.id">
                <img :src="item.coverImgUrl" alt="">&nbsp;&nbsp;&nbsp;{{item.name}}&nbsp;&nbsp;<span>{{item.trackCount}}首</span>
                </router-link>
            </li>
        </ul>
        <br><br><br><br><br>
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
    .nav_contaier{
        margin-top: 0.8rem;
    }
    .nav_contaier li{
        border-bottom: 1px solid #999999;
        line-height: 1.1rem;
        height: 1.1rem;
        font-size: 0.3rem;
    }
    .nav_contaier li span{
        position: absolute;
        right: 0.2rem;
    }
    .nav_title{
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        background-color: #eff0f1;
        height: 0.6rem;
    }
    .nav_title p{
        height: 100%;
        line-height: 0.6rem;
        padding: 0 0.1rem;
        border-left: 4px solid red;
    }
    .nav_contaier2{
        margin-top: 0.2rem;
    }
    .nav_contaier2 li{
        border-bottom: 1px solid #999999;
        line-height: 1.1rem;
        height: 1.1rem;
        font-size: 0.3rem;
        margin-top: 0.1rem;
    }
    .nav_contaier2 li img{
        width: 1.08rem;
        height: 1.08rem;
    }
    .nav_contaier2 li span{
        color: #c4483b;
    }
</style>
<script>
    import $ from '../../../util/axios.js';
    export default {
        name: 'myMusic',
        data() {
            return {
                userId:null,
                recordList:[],
                dj:null,
                playList_1:[],
                playList_2:[],
            }
        },
        created: function () {
            this.getUserId();
            this.getRecord();
            this.getDj();
            this.getEstablish();
        },
        methods: {
            getBack: function () {
                this.$router.go(-1)
            },
            getUserId:function(){  //获取用户的ID
                var userId = window.localStorage.getItem('userId');
                this.userId = userId;
                if (!userId) {
                    alert('请登陆网易云账号！')
                    this.$router.push({ path: '/user' })
                }
            },
            getRecord:function(){
                var $this = this;
                $.ajax('/user/record?type=1&uid='+this.userId).then(function (res) { //获取用户的历史播放
                    $this.recordList = res.weekData;
                    // console.log(res.weekData);
                })
            },
            getDj: function () {
                var $this = this;
                $.ajax('/user/dj?uid=' + this.userId).then(function (res) { //获取用户的电台
                    // console.log(res.count);
                    $this.dj = res.count;
                })
            },
            getEstablish: function () {
                var $this = this;
                $.ajax('/user/playlist?uid=' + this.userId).then(function (res) { //获取用户的自己创建的歌单和收藏的歌单
                    // console.log(res.playlist);
                    for (let i = 0; i < res.playlist.length; i++) {
                         if (res.playlist[i].description == null) {
                            $this.playList_1.push(res.playlist[i])
                        }else{
                            $this.playList_2.push(res.playlist[i])
                        }
                    }
                })
            },
        },
    }
</script>