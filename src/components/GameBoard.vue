<template>
  <div class="bg-gradient-b-red-orange-red p-4 h-full flex flex-col">
    <div class="text-left">
      <transition

        name="bounce"
        mode="out-in"
      >
        <div v-if="!loadingCollection">
          <p class="text-white pb-2">
            Question {{ currentQuestion }} / {{ totalQuestions }}
          </p>
          <progress-bar

            class="mb-8"
            :bars="[{ width: progressBarQuestionPercent, color: '#18bfff' }]"
          />
        </div>
      </transition>
      <!-- <b-progress
        :value="currentQuestion"
        :max="totalQuestions"
        type="is-light"
        class="pb-8"
        size="is-small"
      /> -->
    </div>
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
        class="h-full flex items-center justify-center h-full"
      >
        <span>
          <pacman-loader
            color="#fff"
          /></span>
      </div>


      <game-card
        v-show="!loadingCollection"
        :parent-is-animating="isAnimating"
        :person="currentPerson"
      />
    </transition>
  </div>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue';
import GameCard from './GameCard.vue';
import ProgressBar from './ProgressBar.vue';

export default {
  name: 'Gameboard',
  components: {
    GameCard,
    PacmanLoader,
    ProgressBar,
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
    currentQuestion() {
      return this.$store.state.game.currentQuestion;
    },
    totalQuestions() {
      return this.$store.getters.totalQuestions;
    },
    progressBarQuestionPercent() {
      return (this.currentQuestion / this.totalQuestions) * 100;
    },
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
