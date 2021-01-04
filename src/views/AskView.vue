<template>
  <div>
      <div v-for="ask in askList"> {{ ask.title }}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'

export default {
  data(){
    return{
      askList : []
    }
  },
  created(){
    fetchAskList()
      .then(response => this.askList = response.data)
      .then(error => console.log(error))
  }
}
</script>

<style>

</style>