<template>
  <div class="bg-gradient-b-red-orange-red p-4 h-full ">
    <div
      v-if="loadingCollection"
      class="h-full flex items-center justify-center"
    >
      <span>
        <pacman-loader
          color="#fff"
        /></span>
    </div>
    <GameCard
      v-else
      :person="currentPerson"
    />
  </div>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue';
import GameCard from './GameCard.vue';

export default {
  name: 'Gameboard',
  components: {
    GameCard,
    PacmanLoader,
  },
  data() {
    return {
      greeting: 'Hello',
    };
  },
  computed: {
    loadingCollection() {
      return this.$store.state.peopleCollectionPending;
    },
    previousPerson() { return {}; },
    currentPerson() { return this.$store.state.currentPerson; },
    currentGuessOptions() { return this.$store.currentPerson; },
    nextPerson() { return {}; },

  },
};
</script>

<style scoped>

</style>
