<template>
  <div>
      <div v-for="job in jobList">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState({
      jobList: state => state.jobList
    })
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>