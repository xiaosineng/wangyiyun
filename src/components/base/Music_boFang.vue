<template>
  <div id="boFang">
    <!-- 顶部 -->
    <div class="header">
      <div class="back" @click='goBack()'>
        <span>返回</span>
      </div>
      <div class="content">
        <p>{{title}}</p>
        <p>{{name}}</p>
      </div>
      <div>
        <span>分享</span>
      </div>
    </div>
    <!-- 播放动画 -->
    <div class="BF_content">
      <div class="BF_bg">
        <img class="active" :src="imgUrl" alt="">
      </div>
      <div class="BF_biaoShi">
        <img src="../../assets/img/stick_bg.png" alt="">
      </div>
    </div>
    <!-- 播放器 -->
    <div class="BF_audio">
    </div>
    <div class="audio-box">
      <div class="audio-container">
        <div class="audio-view">
          <div class="audio-cover"></div>
          <div class="audio_box">
            <div class="audio-body">
              <h3 class="audio-title">未知歌曲</h3>
              <div class="audio-backs">
                <div class="audio-this-time">00:00</div>
                <div class="audio-count-time">00:00</div>
                <div class="audio-setbacks">
                  <i class="audio-this-setbacks">
                    <span class="audio-backs-btn"></span>
                  </i>
                  <span class="audio-cache-setbacks">
                  </span>
                </div>
              </div>
            </div>
            <div class="audio-btn">
              <div class="audio-select">
                <div action="prev" class="icon-fast-backward" @click='getpevr()'></div>
                <div action="play" data-on="icon-play" data-off="icon-pause" class="icon-play"></div>
                <div action="next" class="icon-fast-forward" @click='getNext()'></div>
                <!-- <div action="menu" class="icon-list-alt"></div> -->
                <div action="volume" class="icon-volume-up" id="music_up">
                  <div class="audio-set-volume">
                    <div class="volume-box">
                      <i>
                        <span class="audio-backs-btn"></span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #boFang {
    background-color: #89979e;
    height: auto;
    width: auto
  }

  .header {
    height: 1rem;
    background-color: #385d68;
    font-size: 0.28rem;
    display: flex;
    justify-content: space-between;
    line-height: 1rem;
    color: white;
  }

  .header .content {
    width: 50%;
  }

  .header .content p {
    margin: 0 auto;
    height: 50%;
    text-align: center;
    line-height: 0.5rem;
    color: white;
    overflow: hidden;
    width: 50%;
    /* white-space: nowrap;
    text-overflow:ellipsis; */
  }

  .header .content p:nth-child(1) {
    font-size: 0.32rem;
    color: white;
  }

  .header .content p:nth-child(2) {
    font-size: 0.24rem;
    color: white;
  }

  .BF_content {
    height: 12rem;
    width: 100%;
    background-color: #6a7c87;
    position: relative;
  }

  .BF_bg {
    width: 100%;
    height: 8rem;
    background: url('../../assets/img/cd_wrapper.png') no-repeat center center;
    background-size: 65% 60%;
    line-height: 8rem;
    text-align: center;
  }

  .BF_bg img {
    width: 3rem;
    border-radius: 50%;
    animation: play 3s linear infinite;
  }

  @keyframes play {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .BF_biaoShi {
    position: absolute;
    top: 0;
    left: 40%;
  }

  .BF_biaoShi img {
    height: 3rem;
  }

  .BF_audio {
    width: 100%;
    background-color: #6a7c87;
  }

</style>
<script>
  import $ from '../../../util/axios.js';
  import '../../assets/lib/audio/js/audio.js'
  import '../../assets/lib/audio/css/audio.css'
  export default {
    name: 'bofang',
    data() {
      return {
        title: '',
        name: '',
        imgUrl: '',
        songID: this.$store.state.songID, //获取VUEX中的歌曲详情所有的ID
        songPlayList:this.$store.state.songPlayList,
        num:0,
        newPlaysongList:[],
      }
    },
    mounted() {
      this.gitMusicUrl();
    },
    created() {
      this.getSongBoFangId();
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      gitMusicUrl: function () { //获取音乐的RUL地址
        var $this = this;
        $.ajax('/music/url?id=' + this.$route.params.musicBFid).then(function (res) { //获取歌曲的URL
          var str = res.data[0].url; //mp3的URL
          $.ajax('/song/detail?ids=' + $this.$route.params.musicBFid).then(function (res) { // 获取详情信息
            // console.log(res.songs);
            var title = res.songs[0].name;
            var imgUrl = res.songs[0].al.picUrl;
            var name = res.songs[0].ar[0].name;
            
            var songPlayList = [ //定义当前选择播放的歌曲
              {
                title: title,
                src: str,
                cover: imgUrl,
                singer:name,
              }
            ];
              // console.log($this.songPlayList)
            for (let i = 0; i < $this.songPlayList.length; i++) {
               songPlayList.push($this.songPlayList[i]);
            }
            console.log(songPlayList)  //播放列表中的歌曲
            $this.name = name 
            $this.title = title
            $this.imgUrl = imgUrl 

            $this.newPlaysongList = songPlayList;
            var setConfig = {
              song: songPlayList,
              error: function (meg) {
                console.log(meg);
                alert('音乐URL故障！！！！');
              }
            };
            var audioFn = audioPlay(setConfig);
            if (audioFn) {
              //开始加载音频,true为播放,false不播放
              audioFn.loadFile(true);
            }
          })
        })
      },
      getSongBoFangId: function () {
        this.$store.commit('songBoFangId', this.$route.params.musicBFid); //将获取歌单的ID存入VUEX
      },
      getNext:function(){

        if(this.num<=this.songPlayList.length){
          this.num++;
          this.name = this.newPlaysongList[this.num].singer;
          this.title = this.newPlaysongList[this.num].title;
          this.imgUrl = this.newPlaysongList[this.num].cover; 
        }
      },
      getpevr:function(){
        if(this.num>0){
          this.num--;
          this.name = this.newPlaysongList[this.num].singer;
          this.title = this.newPlaysongList[this.num].title;
          this.imgUrl = this.newPlaysongList[this.num].cover; 
        }
      }
    }
  }

</script>
