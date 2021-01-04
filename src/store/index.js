import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js'
import { fetchAskList } from '../api/index.js'
import { fetchJobsList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsList : [],
    askList : [],
    jobList : [],
  },
  mutations: {
    SET_NEWS(state, data){
      state.newsList = data;
    },
    SET_ASK(state, data){
      state.askList = data;
    },
    SET_JOBS(state, data){
      state.jobList = data;
    }
  },
  actions: {
    FECTH_NEWS(context){
      fetchNewsList()
      .then(response => {
        console.log(response.data)
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => console.log(error))
    },
    FETCH_ASK(context){
      fetchAskList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_ASK', response.data);
      })
    },
    FETCH_JOBS(context){
      fetchJobsList()
        .then(response =>{
          console.log(response.data);
          context.commit('SET_JOBS', response.data);
        })
    }
  }
});