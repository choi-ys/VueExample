<template>
  <div>
      <div v-for="news in fetchedNewsList"> {{ news.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters({
      fetchedNewsList : 'fetchedNewsList'
    })
  },
  created(){
    this.$store.dispatch('FECTH_NEWS')
  }
}
</script>

<style>

</style>