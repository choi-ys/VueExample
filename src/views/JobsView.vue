<template>
  <div>
      <div v-for="job in fetchedJobList">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters({
      fetchedJobList : 'fetchedJobList'
    })
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>