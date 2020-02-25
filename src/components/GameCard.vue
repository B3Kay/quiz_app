<template>
  <div
    id="game-card"
    class="bg-white rounded-lg items-center h-full"
  >
    <transition>
      <div v-if="!parentIsAnimating">
        <card-header />
        <card-image :url="person.ImageUrl" />

        <!-- <h2 class="text-3xl font-bold mb-4">
      Agile coach and
    </h2> -->
        <p v-if="parentIsAnimating">
          Parent is animating
        </p>
        <card-suggestions
          :people-list="gameCollection"
          :level="level"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import CardHeader from './CardHeader.vue';
import CardImage from './CardImage.vue';
import CardSuggestions from './CardSuggestions.vue';
// import OtherComponent from './OtherComponent.vue';
export default {
  components: {
    CardHeader,
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

</style>
