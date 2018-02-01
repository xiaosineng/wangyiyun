<template>
    <div id="rinkingList">
         <div class="title">
            <div class="left" @click='getBack()'><img src="../../../assets/img/chevron.png" alt=""></div>
            <div class="center">排行榜</div>
            <router-link :to='"/musicBoFang/"+songBoFangId'>
            <div class="right"><img src="../../../assets/img/home_04.png" alt=""></div>
            </router-link>
        </div>
        <div class="wyy_title margin_01">
            <p>云音乐官方榜</p>
        </div>
        <!-- 飙升榜 -->
        <router-link :to="'/musicXQList/'+ranKing_01PlayID">
        <div class="ranKing_01">
            <div class="left"><img src="../../../assets/img/ranKing1.png" alt=""></div>
            <div class="right">
                <p v-for="(item,index) in ranKing_01" :key="index">{{index+1}}. {{item.name}}--{{item.tName}}</p>
            </div>
        </div>
        </router-link>
         <!-- 新歌榜 -->
        <router-link :to="'/musicXQList/'+ranKing_02PlayID">
        <div class="ranKing_01 margin"> 
            <div class="left"><img src="../../../assets/img/ranKing2.png" alt=""></div>
            <div class="right">
                <p v-for="(item,index) in ranKing_02" :key="index">{{index+1}}. {{item.name}}--{{item.tName}}</p>
            </div>
        </div>
        </router-link>
         <!-- 原创榜 -->
        <router-link :to="'/musicXQList/'+ranKing_03PlayID">
        <div class="ranKing_01 margin"> 
            <div class="left"><img src="../../../assets/img/ranKing3.png" alt=""></div>
            <div class="right">
               <p v-for="(item,index) in ranKing_03" :key="index">{{index+1}}. {{item.name}}--{{item.tName}}</p>
            </div>
        </div>
        </router-link>
        <!-- 热歌榜 -->
        <router-link :to="'/musicXQList/'+ranKing_04PlayID">
        <div class="ranKing_01 margin"> 
            <div class="left"><img src="../../../assets/img/ranKing4.png" alt=""></div>
            <div class="right">
                <p v-for="(item,index) in ranKing_04" :key="index">{{index+1}}. {{item.name}}--{{item.tName}}</p>
            </div>
        </div>
        </router-link>
        <div class="wyy_title">
            <p>全球榜</p>
        </div>
        <div class="contraier">
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_05PlayID"><img src="../../../assets/img/ranKing7.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_05}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_06PlayID"><img src="../../../assets/img/ranKing8.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_06}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_07PlayID"><img src="../../../assets/img/ranKing9.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_07}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_08PlayID"><img src="../../../assets/img/ranKing10.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_08}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_09PlayID"><img src="../../../assets/img/ranKing11.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_09}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_10PlayID"><img src="../../../assets/img/ranKing12.png" alt=""></router-link>  
                </div>
                <div class="foot">{{ranKing_10}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_11PlayID"><img src="../../../assets/img/ranKing13.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_11}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_12PlayID"><img src="../../../assets/img/ranKing14.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_12}}</div>
            </div>
            <div class="ranKing_02">
                <div class="top">
                    <router-link :to="'/musicXQList/'+ranKing_13PlayID"><img src="../../../assets/img/ranKing15.png" alt=""></router-link>
                </div>
                <div class="foot">{{ranKing_13}}</div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>
<style scoped>
    .margin{
        margin-top: 0.1rem;
    }
    .margin_01{
        margin-top: 0.8rem;
    }
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
    .ranKing_01{
        display: flex;
    }
    .ranKing_01 .left{
        height: 2.4rem;
        width: 2.4rem;
    }
    .ranKing_01 .left img{
        height: 100%;
        width: 100%;
    }
    .ranKing_01 .right{
        height: 2.4rem;
        flex: 1;
        /* background-color: red; */
        padding: 0.2rem 0;
        line-height: 0.6rem;
        box-sizing: border-box;
        padding-left: 0.3rem;
    }
    .ranKing_01 .right p{
        font-size: 0.3rem;
        color: #646566;
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .contraier{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .ranKing_02{
        height: 3.2rem;
        width: 2.4rem;
    }
    .ranKing_02 .top{
        height: 2.4rem;
        width: 2.4rem;
    }
    .ranKing_02 .top img{
     width: 100%;
     height: 100%;
    }
    .ranKing_02 .foot{
        height: 0.8rem;
        width: 100%;
        /* background-color: red; */
        line-height: 0.8rem;
        font-size: 0.3rem;
        text-align: center;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

</style>
<script>
    import $ from '../../../../util/axios.js';
    export default {
        name: 'rinkingList',
        data() {
            return {
                //----------------------------页面数据-----------------------------
                ranKing_01:[],
                ranKing_02:[],
                ranKing_03:[],
                ranKing_04:[],
                ranKing_05:'',
                ranKing_06:'',
                ranKing_07:'',
                ranKing_08:'',
                ranKing_09:'',
                ranKing_10:'',
                ranKing_11:'',
                ranKing_12:'',
                ranKing_13:'',
                //-----------------------------playMusicId------------------------
                ranKing_01PlayID: '',
                ranKing_02PlayID: '',
                ranKing_03PlayID: '',
                ranKing_04PlayID: '',
                ranKing_05PlayID: '',
                ranKing_06PlayID: '',
                ranKing_07PlayID: '',
                ranKing_08PlayID: '',
                ranKing_09PlayID: '',
                ranKing_10PlayID: '',
                ranKing_11PlayID: '',
                ranKing_12PlayID: '',
                ranKing_13PlayID: '',

                songBoFangId: this.$store.state.songBoFangId
            }
        },
        created: function () {
            this.getRanKing_01();
            this.getRanKing_02();
            this.getRanKing_03();
            this.getRanKing_04();
            this.getRanKing_05();
            this.getRanKing_06();
            this.getRanKing_07();
            this.getRanKing_08();
            this.getRanKing_09();
            this.getRanKing_10();
            this.getRanKing_11();
            this.getRanKing_12();
            this.getRanKing_13();
        },
        methods: {
            getBack: function () {
                this.$router.go(-1)
            },
            getRanKing_01: function () {  //飙升榜
                var $this = this
                var arr = [
                    {name:'',tName:''},
                    {name:'',tName:''},
                    {name:'',tName:''}
                ];
                $.ajax('/top/list?idx=3').then(function (res) {
                    // console.log(res.result.id);
                    $this.ranKing_01PlayID = res.result.id;
                    for (let i = 0; i < 3; i++) {
                        arr[i].name = res.result.tracks[i].name
                        arr[i].tName = res.result.tracks[i].artists[0].name;
                    }
                    $this.ranKing_01 = arr;
                    // console.log(arr);
                })
            },
            getRanKing_02: function () {  //新歌榜
                var $this = this
                var arr = [
                    {name:'',tName:''},
                    {name:'',tName:''},
                    {name:'',tName:''}
                ];
                $.ajax('/top/list?idx=0').then(function (res) {
                    // console.log(res.result.tracks);
                    $this.ranKing_02PlayID = res.result.id;
                    for (let i = 0; i < 3; i++) {
                        arr[i].name = res.result.tracks[i].name
                        arr[i].tName = res.result.tracks[i].artists[0].name;
                    }
                    $this.ranKing_02 = arr;
                    // console.log(arr);
                })
            },
            getRanKing_03: function () {  //原创榜
                var $this = this
                var arr = [
                    {name:'',tName:''},
                    {name:'',tName:''},
                    {name:'',tName:''}
                ];
                $.ajax('/top/list?idx=2').then(function (res) {
                    // console.log(res.result.tracks);
                    $this.ranKing_03PlayID = res.result.id;
                    for (let i = 0; i < 3; i++) {
                        arr[i].name = res.result.tracks[i].name
                        arr[i].tName = res.result.tracks[i].artists[0].name;
                    }
                    $this.ranKing_03 = arr;
                    // console.log(arr);
                })
            },
            getRanKing_04: function () {  //热歌榜
                var $this = this
                var arr = [
                    {name:'',tName:''},
                    {name:'',tName:''},
                    {name:'',tName:''}
                ];
                $.ajax('/top/list?idx=1').then(function (res) {
                    // console.log(res.result.tracks);
                    $this.ranKing_04PlayID = res.result.id;
                    for (let i = 0; i < 3; i++) {
                        arr[i].name = res.result.tracks[i].name
                        arr[i].tName = res.result.tracks[i].artists[0].name;
                    }
                    $this.ranKing_04 = arr;
                    // console.log(arr);
                })
            },
            getRanKing_05: function () {  //电音榜
                var $this = this
                $.ajax('/top/list?idx=4').then(function (res) {
                    //  console.log(res.result);
                    $this.ranKing_05PlayID = res.result.id;
                     $this.ranKing_05 = res.result.name;
                })
            },
            getRanKing_06: function () {  //嘻哈榜
                var $this = this
                $.ajax('/top/list?idx=5').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_06 = res.result.name;
                     $this.ranKing_06PlayID = res.result.id;
                })
            },
            getRanKing_07: function () {  //云音乐ACG音乐榜,
                var $this = this
                $.ajax('/top/list?idx=6').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_07 = res.result.name;
                     $this.ranKing_07PlayID = res.result.id;
                })
            },
             getRanKing_08: function () {  //嘻哈榜
                var $this = this
                $.ajax('/top/list?idx=7').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_08 = res.result.name;
                     $this.ranKing_08PlayID = res.result.id;
                })
            },
             getRanKing_09: function () {  
                var $this = this
                $.ajax('/top/list?idx=8').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_09 = res.result.name;
                     $this.ranKing_09PlayID = res.result.id;
                })
            },
             getRanKing_10: function () {  
                var $this = this
                $.ajax('/top/list?idx=9').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_10 = res.result.name;
                     $this.ranKing_10PlayID = res.result.id;
                })
            },
             getRanKing_11: function () {  
                var $this = this
                $.ajax('/top/list?idx=10').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_11 = res.result.name;
                     $this.ranKing_11PlayID = res.result.id;
                })
            },
             getRanKing_12: function () {  
                var $this = this
                $.ajax('/top/list?idx=11').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_12 = res.result.name;
                     $this.ranKing_12PlayID = res.result.id;
                })
            },
             getRanKing_13: function () {  
                var $this = this
                $.ajax('/top/list?idx=13').then(function (res) {
                    //  console.log(res.result);
                     $this.ranKing_13 = res.result.name;
                     $this.ranKing_13PlayID = res.result.id;
                })
            },
        }
    }
</script>