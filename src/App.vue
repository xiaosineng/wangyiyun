<template>
  <div id="app">
    <div class="taber" v-show="isShow">
      <ul>
        <li>
          <router-link to="/home">
            <img src="./assets/img/home_12.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/myMusic">
            <img src="./assets/img/home_13.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/friend">
            <img src="./assets/img/home_14.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/user">
            <img src="./assets/img/home_15.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<style scoped>
  .taber {
    height: 0.97rem;
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .taber ul {
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 9999999;
  }

  .taber ul li {
    height: 100%;
    width: 25%;
    border: 1px solid skyblue;
  }

  .taber ul li img {
    display: block;
    width: 1.875rem;
    height: 100%;
  }

</style>
<script>
  import $ from '../util/axios';
  import {
    Tabbar,
    TabItem
  } from 'mint-ui';
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        isShow:true,
      }
    },
    created: function () {
      // this.gitName();
      // this.tabberIF(this.$route.path);
    },
    updated () {
      this.tabberIF(this.$route.path);
    },
    methods: {
      tabberIF:function(path){
        // console.log(path)
        if (path.indexOf('/musicBoFang') == 0 || path.indexOf('/MV_xiangqing') == 0 || path.indexOf('/songSheet') == 0) {
          this.isShow = false;
        }else{
          this.isShow = true;
        }
      }
    }
  }

</script>
