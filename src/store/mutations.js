export default{
  SET_NEWS(state, data){
    state.newsList = data;
  },
  SET_ASK(state, data){
    state.askList = data;
  },
  SET_JOBS(state, data){
    state.jobList = data;
  },
  SET_USER(state, data){
    state.userInfo = data;
  },
  SET_ITEM(state, data){
    state.itemInfo = data;
  },
}