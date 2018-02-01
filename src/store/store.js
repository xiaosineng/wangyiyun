import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        songID:[],                                            //歌单中所有单曲的ID
        TJsongListId:'',                                      //获取当前歌单的ID
        songBoFangId:'',                                      //用户当前正在播放的歌曲ID
        songPlayList:[],                                      //需要加入播放器中的当前歌单列表数据
        userId:'',                                            //用户的ID
    },
    mutations: {
        songID:function(state,songID) {
            state.songID = songID;
        },
        songPlayList: function (state, songPlayList) {
           state.songPlayList = songPlayList;
        },
        TJsongListId:function(state,TJsongListId) {
            state.TJsongListId = TJsongListId;
        },
        songBoFangId:function(state,songBoFangId) {
            state.songBoFangId = songBoFangId;
        },
        userId: function (state, userId) {
          state.userId = userId;
        }

    }
})