<template>
  <div>
      <p>{{ fetchedUserInfo.id }}</p>
      <p>{{ fetchedUserInfo.karma }}</p>
      <p>{{ fetchedUserInfo.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters({
      fetchedUserInfo : 'fetchedUserInfo'
    })
  },
  created(){
    var username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  }
}
</script>
<style>

</style>