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
    itemInfo: {},
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
    },
    fetchedItemInfo(state){
      return state.itemInfo;
    },
  },
  mutations: mutations,
  actions: actions,
});