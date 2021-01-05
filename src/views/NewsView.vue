<template>
  <div>
      <div v-for="news in newsList"> {{ news.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState({
      newsList: state => state.newsList
    })
  },
  created(){
    this.$store.dispatch('FECTH_NEWS')
  }
}
</script>

<style>

</style>