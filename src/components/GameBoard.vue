<template>
  <div class="bg-gradient-b-red-orange-red p-4 h-full ">
    <transition
      name="bounce"
      mode="out-in"
      @before-enter="isAnimating = true"
      @before-leave="isAnimating = false"
      @after-enter="isAnimating = false"
      @after-leave="isAnimating = true"
    >
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
        :parent-is-animating="isAnimating"
        :person="currentPerson"
      />
    </transition>
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
      isAnimating: false,
    };
  },
  computed: {
    loadingCollection() {
      // return true;
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
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
