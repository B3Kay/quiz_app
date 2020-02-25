
<template>
  <div
    id="game-card"
    class="bg-white rounded-lg items-center flex-grow"
  >
    <transition name="card-content">
      <div v-show="!parentIsAnimating">
        <!-- <div> -->
        <!-- <card-header /> -->
        <card-image :url="person.ImageUrl" />

        <!-- <h2 class="text-3xl font-bold mb-4">
      Agile coach and
    </h2> -->
        <!-- <p v-show="parentIsAnimating">
        Parent is animating
      </p> -->
        <card-suggestions
          :people-list="gameCollection"
          :level="level"
        />
      </div>
    </transition>
  </div>
</template>

<script>

// import CardHeader from './CardHeader.vue';
import CardImage from './CardImage.vue';
import CardSuggestions from './CardSuggestions.vue';
// import OtherComponent from './OtherComponent.vue';
export default {
  components: {
    // CardHeader,
    CardImage,
    CardSuggestions,
  },
  props: {
    person: {},
    parentIsAnimating: Boolean,
  },

  data() {
    return {
      greeting: 'Hello',
    };
  },
  computed: {
    level() {
      return this.$store.state.level;
    },
    randomPeople() {
      return this.$store.state.randomPeople;
    },
    gameCollection() {
      const gameCollection = [...this.randomPeople];
      gameCollection.push(this.person);

      return gameCollection.sort((a, b) => {
        const nameA = a.Name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.Name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    },

  },
  methods: {
    nextPerson() {
      this.$store.dispatch('showNextPerson');
    },
  },
};
</script>

<style  scoped>
.card-content-enter-active {
  animation: bounce-in .5s;
}
.card-content-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  /* 50% {
    transform:  translateY(20px);
  } */
  100% {
    transform:  translateY(0);
    opacity: 1;
  }
}
</style>
