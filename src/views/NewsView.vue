<template>
  <div>
    <p v-for="news in fetchedNewsList"> 
      <a v-bind:href="news.url">{{ news.title }}</a>
      <small>
        {{ news.time_ago }}
        <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>
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