
<template>
  <div class="home">
    <!-- <h1 class="text-yellow-500 text-4xl font-black uppercase">
      Squeedoo
    </h1>
    <h2 class="">
      Who is this Squeeder?
    </h2> -->
    <div v-if="!loadingCollection">
      Loading...
    </div>

    <div v-if="loadingCollection">
      <div class="">
        <div class="flex justify-center">
          <img
            v-if="true"
            class="w-full max-w-lg md:rounded-lg"
            :src="'https://www.squeed.com/' + person.ImageUrl"
          >
        </div>
        <ul class="mt-10 mb-10">
          <li
            v-for="gamePerson in gameCollection"
            :key="gamePerson.Id"
          >
            <!-- <button
              class="w-full bg-gradient-r-pink-purple mb-2 hover:bg-yellow-500 hover:text-white
              max-w-md rounded h-12 text-lg text-white hover:bg-gradient
              "
              @click="checkIfCorrectPerson(gamePerson)"
            >
              {{ gamePerson.Name }}
            </button> -->
            <b-button
              class="mb-2"
              :type="gamesSatus === 'SUCCESS' ? 'is-success' :
                (gameStatus === 'FAILED' ? 'is-danger' : 'is-primary')"
              outlined
              expanded

              @click="checkIfCorrectPerson(gamePerson)"
            >
              {{ gamePerson.Name }}
            </b-button>
          </li>
        </ul>
      </div>
      <div v-if="gameStatus !== 'RUNNING'">
        <p :class="getGameStatusColorClass">
          {{ gameStatus }}
        </p>
        <button
          class=" bg-gradient-br-orange-red hover:bg-yellow-600 hover:text-white
          h-24 w-24 rounded-full text-white
          "
          @click="nextPerson"
        >
          NEXT
        </button>
      </div>
    </div>

    <h2>Game points: {{ gamePoints }}</h2>
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
// computed: mapState({
//     peopleCollection: (state) => state.peopleCollection,
//     peopleCollectionAlias: 'peopleCollection',
//   }),
</script>
