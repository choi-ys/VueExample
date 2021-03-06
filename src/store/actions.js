import { 
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index.js'

export default{
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
  },
  FETCH_USER({ commit }, username){
    fetchUserInfo(username)
      .then(({ data }) =>{
        commit('SET_USER', data)
      })
      .catch(error => console.log(error))
  },
  FETCH_ITEM({ commit }, id){
    fetchItemInfo(id)
      .then(({ data }) =>{
        commit('SET_ITEM',data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}