<template>
  <div>
      <div v-for="ask in askList"> {{ ask.title }}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'

export default {
  data(){
    return {
      askList : []
    }
  },
  created(){
    var vm = this;
    fetchAskList()
      .then(function(response){
        vm.askList = response.data;
      })
      .then(function(error){
        console.log(error);
      })
  }
}
</script>

<style>

</style>