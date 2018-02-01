 <template>
    <div id="home" style="width:100%">
        <div class="nav_top">
            <div class="left"><img src="../../assets/img/home_02.png" alt=""></div>
            <input class="secher" type="secher" name="" value="" placeholder="搜索音乐，视频，歌词，电台">
            <router-link :to='"/musicBoFang/"+songBoFangId'>
            <div class="right"><img src="../../assets/img/home_04.png" alt=""></div>
            </router-link>
        </div>
        <div class="tabler">
            <ul>
                <li v-for="(item,index) in tabs" >
                    <router-link :to="item.routerData">
                    <a @click="tab(index)" :class="{'a1':num == index}" href="javascript:;">{{item.class}}</a>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .nav_top{
        height: 0.8rem;
        width: 100%;
        background-color: #d43c33;
        display: flex;
        justify-content: space-around;
        line-height: 0.8rem;
        position: fixed;
        top:0;
        z-index: 999;
    }
    .nav_top .left{
        height: 100%;
    }
    .nav_top .left img{
        height: 100%;
        width: 0.95rem;
        display: block;
    }
    .secher{
        width: 5.3rem;
        height: 0.6rem;
        background-color: white;
        margin-top: 0.1rem;
        border-radius: 20px;
        padding: 0 0.1rem;
    }
    .nav_top .right {
        height: 100%;
    }
    .nav_top .right img{
        height: 100%;
        width: 0.95rem;
        display: block;
    }
    .mint-navbar{
        display: flex;
    }
    .tabler{
        height: 0.8rem;
        width: 100%;
        background-color: white;
        box-sizing: border-box;
        position: fixed;
        top: 0.8rem;
        z-index: 9999;
    }
    .tabler ul{
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-around;
    }
    .tabler ul li{
        width: 33.333333%;
        height: 100%;
        /* background-color: skyblue; */
        text-align: center;
        line-height: 0.8rem;
        box-sizing: border-box;
    }
    .tabler ul li a{
        height: 100%;
        width: 0.84rem;
        display: inline-block;
        font-weight: 700;
        /* background-color: red; */
    }
    .a1{
       border-bottom: 2px solid red;
        color: red; 
    }
</style>
<script>
   export default {
        name: 'home',
        data() {
            return {
                num:0,
                tabs: [
                    {class:'音乐',routerData:'/home/musicClass'},
                    {class:'视频',routerData:'/home/moviesClass'},
                    {class:'电台',routerData:'/home/radioClass'},
                ],
                songBoFangId: this.$store.state.songBoFangId
            }
        },
        created: function () {
            
        },
        methods: {
            tab:function(index){
                this.num = index;
            }
        },
    }
</script>