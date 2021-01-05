<template>
  <div>
    <p v-for="ask in fetchedAskList"> 
      <a v-bind:href="`/item/${ask.id}`">{{ ask.title }}</a>
      <small>{{ ask.time_ago }} {{ ask.user }}</small>
    </p>
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