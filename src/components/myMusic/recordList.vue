<template>
  <div id="musicList">
    <!-- 顶部 -->
    <mt-header title="歌单">
      <router-link to="/" slot="left">
        <mt-button>返回</mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <!-- 歌曲列表 -->
    <div v-for="(item,index) in musicXQplaylist" keyx="index">
      <router-link :to='"/musicBoFang/"+item.song.id'>
        <div class="musicList">
          <div class="left">{{index+1}}</div>
          <div class="right">
            <p>{{item.song.al.name}}</p>
            <p>{{item.song.ar[0].name}}--{{item.song.alia[0]}}</p>
          </div>
          <div class="icon">
            <img src="../../assets/img/iconright.png" alt="">
          </div>
        </div>
      </router-link>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<style scoped>
  #musicList {
    position: relative;
  }

  .mint-header {
    height: 0.8rem;
    background-color: #6a6454;
    font-size: 0.28rem;
  }

  .router-link-active .mint-button-icon .mintui {
    font-size: 0.28rem;
  }

  .mint-searchbar {
    height: 0.6rem;
  }

  .search {
    width: 100%;
    background-color: #6a6454;
    text-align: center;
    padding: 0.2rem 0rem;
  }

  .search input {
    height: 0.6rem;
    width: 90%;
    border: 1px solid white;
    background-color: #8a7055;
    border-radius: 0.25rem;
    padding: 0 0.2rem;
  }

  .MusicInfo {
    height: 3rem;
    width: 100%;
    background-color: #6a6454;
    display: flex;
  }

  .MusicInfo>div {
    width: 50%;
    height: 100%;
    text-align: center;
  }

  .MusicInfo .left img {
    height: 2.8rem;
    width: 2.8rem;
  }

  .MusicInfo .right p {
    font-size: 0.36rem;
    text-align: left;
    /* font-weight: 700; */
    color: white;
    margin: 0.2rem 0;
  }

  .MusicInfo .right .title {
    display: flex;
    font-size: 0.32rem;
    margin-top: 0.4rem;
  }

  .MusicInfo .right .title img {
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
  }

  .MusicInfo .right .title span {
    line-height: 0.8rem;
    margin-left: 0.2rem;
    color: white;
    opacity: 0.8;
  }

  .nav_img {
    width: 100%;
  }

  .musicList {
    display: flex;
    height: 1.1rem;
    position: relative;
    /* background-color: red; */
    /* border-bottom: 1px solid #999999; */
  }

  .musicList .left {
    height: 100%;
    width: 10%;
    /* background-color: skyblue; */
    line-height: 1.1rem;
    text-align: center;
  }

  .musicList .right {
    width: 80%;
    height: 100%;
    border-bottom: 1px solid #999999;
  }

  .musicList .right p:nth-child(1) {
    font-size: 0.36rem;
    color: black;
    margin-top: 0.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .musicList .right p:nth-child(2) {
    font-size: 0.24rem;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .musicList .icon {
    height: 100%;
    width: 10%;
    text-align: center;
    border-bottom: 1px solid #999999;
  }

  .musicList .icon img {
    height: 0.5rem;
    line-height: 1.1rem;
    margin-top: 0.3rem;
  }

  .span {
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
  import {
    Header
  } from 'mint-ui';
  import {
    Cell
  } from 'mint-ui';
  import $ from '../../../util/axios.js';
  export default {
    data() {
      return {
        musicXQplaylist: [],
        imgUrl: null,
        imgUrl_title: null,
        uersName: null,
        name: null,
        obj: {},
        songPlayList: [],
        urlList:[],
      }
    },
    created: function () {
      this.gitMuiscXQ();

    },
    methods: {
      gitMuiscXQ: function () { //通过id获取详情数据
        var $this = this;
        var index = 0;
        var indexU = 0;
        $.ajax('/user/record?type=1&uid=' + this.$route.params.userId).then(function (res) {
        //   console.log(res)
          $this.musicXQplaylist = res.weekData;
          var songList = res.weekData

          var songID = []; //获取列表中音乐的所有ID
          for (var i = 0; i < res.weekData.length; i++) {
            songID.push(res.weekData[i].song.id)
          }
          
        //   console.log(songID)
          getUrl();
          function getUrl() {
              $.ajax('/music/url?id=' + songID[indexU]).then(function (res) { //获取每一歌的URL
                // console.log(res.data)
                if (res.code == 200) {
                    var urlData = res.data;
                      $this.urlList.push(urlData[0].url);
                      indexU++;
                      if (indexU < songID.length) {
                          getUrl();
                      } else {
                          return;
                      }
                  }
              })
          }

          getsong();
          function getsong() {
            $.ajax('/song/detail?ids=' + songID[index], ).then(function (res) {
                // console.log(res.songs[0].ar[0].name)
              if (res.code == 200) {
                $this.songPlayList[index] = {
                  title: res.songs[0].name,
                  src:$this.urlList[index],
                  singer:res.songs[0].ar[0].name,
                  cover: res.songs[0].al.picUrl
                }
                index++;
                if (index < songID.length) {
                  getsong();
                } else {
                  return;
                }
              }
            });
          }

        //   console.log($this.songPlayList)
        //   console.log($this.urlList)
          $this.$store.commit('songID', songID); //歌单详情中所有歌曲的ID存入VUEX
          $this.$store.commit('songPlayList', $this.songPlayList); //播放列表存入VUEX
          $this.$store.commit('TJsongListId', $this.$route.params.muiscId); //将获取歌单的ID存入VUEX
        })
      },
    }
  }

</script>
