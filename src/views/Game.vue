<template>
  <GameBoard />
</template>

<script>
import GameBoard from '../components/GameBoard.vue';

export default {
  name: 'GamePage',
  components: {
    GameBoard,
  },
  data() {
    return {
      greeting: 'Hello',
    };
  },
  computed: {
    gameStatus() {
      return this.$store.state.gameStatus;
    },
    loadingCollection() {
      return !this.$store.state.peopleCollectionPending;
    },
    peopleCollection() {
      return this.$store.state.peopleCollection;
    },

    person() {
      // return this.peopleCollection[1];
      return this.$store.state.currentPerson;
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
    gamePoints() {
      return this.$store.state.gamePoints;
    },
    getGameStatusColorClass() {
      const stts = this.$store.state.gameStatus;
      if (stts === 'SUCCESS') return 'bg-green-500';
      if (stts === 'FAILED') return 'bg-red-500';
      return '';
    },
    // donePeoplesCount() {
    //   return this.$store.getters.donePeoplesCount;
    // },
    // count() {
    //   return this.$store.state.count;
    // },
  },
  created() {
    this.$store.dispatch('getPeopleCollection');
  },
  methods: {
    // increment() {
    //   this.$store.dispatch('incrementAsync');
    // },

    nextPerson() {
      this.$store.dispatch('showNextPerson');
    },
    checkIfCorrectPerson(param) { this.$store.dispatch('checkIfCorrectPerson', param); },
  },
};
</script>

<style lang="stylus" scoped>

</style>
