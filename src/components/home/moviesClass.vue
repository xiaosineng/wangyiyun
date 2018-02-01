<template>
    <div id="movies" style="width:100%">
        <div class="movie_contaier" v-for="item in moviesList">
            <div class="video_contaier">
                <video class="video" :src="'http://123.207.59.80:3000/mv/url?url='+item.brs[240]" 
                controls loop  x5-playsinline="" playsinline="" webkit-playsinline="" 
                :poster='item.cover'></video>
            </div>
            <div class="foot">
                <div class="left"><p>{{item.briefDesc}}</p></div>
                <div class="right">
                    <router-link :to="'/MV_xiangqing/'+item.id">
                    <img src="../../assets/img/plIcio.png" alt="">
                    </router-link>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>
<style scoped>
    .movie_contaier{
        width: 100%;
        height: 5.6rem;
    }
    .movie_contaier .video_contaier{
        height: 4.2rem;
        width: 100%;
        /* background-color: aqua; */
    }
    .movie_contaier .video_contaier .video{
        width: 100%;
        height: 100%;
        object-fit:fill;
    }
    .movie_contaier .foot{
        width: 100%;
        height: 1.4rem;
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
    }
    .movie_contaier .foot .left p{
        font-size: 0.3rem;
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-top: 0.3rem;
        margin-left: 0.1rem;
    }
    /* .movie_contaier .foot .right{
        width: 100%;
        height: 0.3rem;
    } */
    .movie_contaier .foot .right img{
        height: 100%;
        width: 100%;
    }
</style>
<script>
    import $ from '../../../util/axios.js';
    export default {
        name: 'movies',
        data() {
            return {
              moviesList:[],  
            }
        },
        created: function () {
            this.getNewMv();
        },
        methods: {
            getNewMv:function(){ //获取最新MV
                var $this = this;
                var mvID = [];
                var moviesList = [];
                $.ajax('/mv/first').then(function (res) {
                    // console.log(res.data);
                    for (let i = 0; i < res.data.length; i++) {
                        mvID.push(res.data[i].id)
                    }
                    for (let j = 0; j < mvID.length; j++) {
                         $.ajax('/mv?mvid='+mvID[j]).then(function (res) { //通过MVid获取MV的详情
                            moviesList.push(res.data)
                         })  
                    }
                    console.log(moviesList);
                    $this.moviesList = moviesList;
                })
            }
        }
    }
</script>