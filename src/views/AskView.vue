<template>
  <div>
      <div v-for="ask in fetchedAskList"> {{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters({
      fetchedAskList : 'fetchedAskList'
    })
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>