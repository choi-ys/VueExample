<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItemInfo.user}`">{{ fetchedItemInfo.user }}</router-link>
          <div>
            {{ fetchedItemInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedItemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters({
      fetchedItemInfo : 'fetchedItemInfo'
    })
  },
  created(){
    var itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-discription {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>