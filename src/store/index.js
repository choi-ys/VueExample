import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsList : [],
    askList : [],
    jobList : [],
    userInfo: {},
  },
  getters:{
    fetchedNewsList(state){
      return state.newsList;
    },
    fetchedAskList(state){
      return state.askList;
    },
    fetchedJobList(state){
      return state.jobList;
    },
    fetchedUserInfo(state){
      return state.userInfo;
    }
  },
  mutations: mutations,
  actions: actions,
});