<template>
  <div id="movie_bofang">
    <div class="container">
      <div class="video">
        <video controls loop autoplay x5-playsinline="" playsinline="" webkit-playsinline="" :src="mvUrl" :poster='cover'>
        </video>
      </div>
      <div class="back">
        <img @click='goBack()' src="../../assets/img/chevron.png" alt="">
      </div>
    </div>
     <div class="info">
        <h3>{{MvXqInfo.name}}</h3>
        <p class="p1">歌手：{{MvXqInfo.artistName}}</p>
        <p class="p2">
          <span>发行：{{MvXqInfo.publishTime}}</span>
          <span>|</span>
          <span>播放:{{MvXqInfo.playCount}}</span>
        </p>
      </div>
      <div class="navImg">
        <img src="../../assets/img/mv_title.png" alt="">
      </div>
    <div class="comment_nav">
        精彩评论
    </div>
    <div class="comment_container">
        <div class="comment" v-for="item in comments">
            <div class="top">
                <div class="left">
                    <img :src="item.user.avatarUrl" alt="">
                </div>
                <div class="right">
                    <p>{{item.user.nickname}}</p>
                </div>
            </div>
            <div class="foot">
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
  .video video {
    width: 100%;
    height: 3.2rem;
    object-fit: fill
  }

  .back {
    width: 100%;
    height: 0.8rem;
    background: rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    left: 0;
  }

  .back img {
    width: 0.8rem;
    height: 100%;
    display: block;
    margin-left: 0.2rem;
  }

  .info {
    width: 100%;
    height: 2.4rem;
    padding-top: 0.4rem;
    padding-left: 0.2rem;
    margin-top: 3.2rem;
  }

  .info h3 {
    font-size: 0.36rem;
    font-weight: 700;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .info .p1 {
    font-size: 0.30rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 0.4rem;
    color: #477daa;
  }

  .info .p2 {
    margin-top: 0.4rem;
    color: #969697;
  }

  .info .p2 span:nth-child(3) {
    margin-left: 0.4rem;
  }

  .info .p2 span:nth-child(2) {
    margin-left: 0.4rem;
  }

  .navImg img {
    width: 100%;
    height: 3rem;
  }
  .container{
      width: 100%;
      position: fixed;
      top: 0;
  }
  .comment_nav{
      width: 100%;
      height: 0.5rem;
      background-color: #dbe7e7;
      font-size: 0.30rem;
      padding-left: 0.2rem;
  }
  .comment{
      min-height: 1.6rem;
      width: 100%;
      background-color: #f8f8f8;
      border-bottom: 1px solid #999999;
  }
  .comment .top {
    display: flex;
  }
  .comment .top .left{
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
  }
  .comment .top .left img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
  }
  .comment .top .right{
      height: 0.65rem;
      line-height: 0.65rem;
      margin-top: 0.2rem;
      margin-left: 0.1rem;
      color: #666666;
  }
  .comment .foot{
    padding-left: 0.95rem;
    font-size: 0.3rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
</style>
<script>
  import $ from '../../../util/axios.js';
  export default {
    name: 'movie_bofang',
    data() {
      return {
        mvUrl: '',
        MvXqInfo: '',
        comments:[],
        cover:'',
      }
    },
    created: function () {
      this.gitMvList();
      this.getMvComment();
    },
    methods: {
      gitMvList: function () {
        var $this = this
        $.ajax('/mv?mvid=' + this.$route.params.MVID).then(function (res) { //获取MV数据列表
          // console.log(res.data);
          $this.cover = res.data.cover;
          $this.MvXqInfo = res.data;
          var mvUrl = 'http://123.207.59.80:3000/mv/url?url=' + res.data.brs[240];
          // var mvUrl = res.data.brs[240];
          $this.mvUrl = mvUrl
        })
      },
      goBack: function () {
        this.$router.go(-1)
      },
      getMvComment:function(){
        var $this = this;
        $.ajax('/comment/mv?id=' + this.$route.params.MVID).then(function (res) {  //获取MV评论信息
            // console.log(res)
            $this.comments = res.comments;
        })
      }
    }
  }

</script>
