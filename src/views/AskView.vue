<template>
  <div>
      <div v-for="ask in this.$store.state.askList"> {{ ask.title }}</div>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>