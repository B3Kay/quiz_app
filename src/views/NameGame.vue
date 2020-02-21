
<template>
  <div class="home">
    <h1>Squeedoo</h1>
    <h2>Who is this Squeeder?</h2>
    <div v-if="!loadingCollection">
      Loading...
    </div>
    <div v-if="loadingCollection">
      <div>
        <img
          v-if="true"
          :style="{height: '500px', width: '500px', borderRadius: '9999px'}"
          :src="'https://www.squeed.com/' + person.ImageUrl"
        >
        <ul>
          <li
            v-for="gamePerson in gameCollection"
            :key="gamePerson.Id"
          >
            <button @click="checkIfCorrectPerson(gamePerson)">
              {{ gamePerson.Name }}
            </button>
          </li>
        </ul>
      </div>
      <div v-if="gameStatus !== 'RUNNING'">
        <p>{{ gameStatus }}</p>
        <button @click="nextPerson">
          Next Squeeder
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { mapState } from 'vuex';

export default {

  name: 'NameGame',
  //   data: function() {
  //     return { peopleCollection: [] };
  //   },
  computed: {
    getNameById() {
      return this.$store.getters.getNameById(3238);
    },
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
// computed: mapState({
//     peopleCollection: (state) => state.peopleCollection,
//     peopleCollectionAlias: 'peopleCollection',
//   }),
</script>
