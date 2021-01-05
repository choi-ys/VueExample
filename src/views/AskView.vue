<template>
  <div>
      <div v-for="ask in askList"> {{ ask.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState({
      askList: state => state.askList
    })
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>