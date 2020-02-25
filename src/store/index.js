/* eslint-disable no-console */
/* eslint no-param-reassign: "error" */
import Vue from 'vue';
import Vuex from 'vuex';


import peopleData from '../api/peopleData';
import game from './modules/game';

Vue.use(Vuex);
// console.log(peopleData);

export default new Vuex.Store({
  state: {
    // User
    user: {
      uid: '',
      nickName: 'Benjimon',
      score: {
        total: 100,
        correct: 55,
      },
    },
    // People
    peopleCollection: [],
    peopleCollectionPending: null,
    peopleCollectionSuccess: null,
    peopleCollectionFail: null,
    // Person
    currentPerson: {},

    randomPeople: [],
    // Game Mechanics
    gameStatus: 'RUNNING',
    level: 2,

    //

  },
  getters: {
    peopleCollection(state) {
      return state.peopleCollection;
    },
    notGuessedPeopleCollection(state) {
      // console.log(state.peopleCollection);
      return state.peopleCollection.filter((person) => !person.guessed);

      // console.log(newState);
    },
    totalQuestions(state) {
      return state.peopleCollection.length;
    },
    getNameById: (state) => (id) => state.peopleCollection.find((person) => person.Id === id),
  },
  mutations: {
    // People API
    SET_PEOPLE_COLLECTION(state, payload) {
      state.peopleCollection = payload;
    },
    SET_PEOPLE_COLLECTION_PENDING(state, payload) {
      state.peopleCollectionPending = payload;
    },
    SET_PEOPLE_COLLECTION_SUCCESS(state, payload) {
      state.peopleCollectionSuccess = payload;
    },
    SET_PEOPLE_COLLECTION_FAIL(state, payload) {
      state.peopleCollectionFail = payload;
    },
    // Random People
    SET_CURRENT_RANDOM_PEOPLE(state, payload) {
      state.randomPeople = payload;
    },
    // Person
    SET_RANDOM_PERSON(state, payload) {
      state.currentPerson = payload;
    },
    SET_CURRENT_PERSON(state, payload) {
      console.log(`New CUrrent person:${payload.Name}`);
      state.currentPerson = payload;
    },
    SET_PERSON_DONE(state, person) {
      // console.log(person);
      const index = state.peopleCollection.indexOf(person);
      // console.log(index);
      state.peopleCollection[index].guessed = true;
    },
    // Game Mechanics
    GAME_STATUS(state, payload) {
      state.gameStatus = payload;
    },
    HIDE_GAME_STATUSES(state) {
      state.gameStatus = 'RUNNING';
    },
    // SET_GAME_POINTS(state, payload) {
    //   state.gamePoints += payload;
    // },
  },
  actions: {
    // getRandomPerson({ state }) {
    //   const randomPerson = state.peopleCollection[Math.floor(
    //     Math.random() * state.peopleCollection.length,
    //   )];
    //   console.log('THIS IS NE RANDOM VVVV');
    //   console.log(`New random: ${randomPerson.name}`);
    //   return randomPerson;
    // },
    showNextPerson(context) {
      // console.log('SHow next person!');
      // console.log('Set current to new Random!');
      context.dispatch('setCurrentToRandom');
      context.dispatch('setRandomPeople', context.state.level);
      // console.log('Set gameStatus');
      context.commit('SET_CURRENT_QUESTION');
      context.commit('GAME_STATUS', 'RUNNING');
    },
    setRandomPeople({ state, commit }, amount) {
      const persons = [];
      for (let index = 0; index < amount; index += 1) {
        const randomPerson = state.peopleCollection[Math.floor(
          Math.random() * state.peopleCollection.length,
        )];
        if (persons.indexOf(randomPerson) > -1) break;
        // console.log(randomPerson);
        persons.push(randomPerson);
      }
      // console.log(persons);
      // console.log(persons, state.peopleCollection.length);
      // return persons;
      commit('SET_CURRENT_RANDOM_PEOPLE', persons);
    },
    setCurrentToRandom(context) {
      // console.log('Set current to random');
      // const randomPerson = context.dispatch('getRandomPerson');
      // console.log(randomPerson);
      const collection = context.state.peopleCollection.filter((person) => !person.guessed);
      // console.log('Not Guess Poeple');
      // console.log(collection);
      const randomPerson = collection[Math.floor(
        Math.random() * collection.length,
      )];
      // const randomPerson = context.state.peopleCollection[Math.floor(
      //   Math.random() * context.state.peopleCollection.length,
      // )];
      context.commit('SET_CURRENT_PERSON', randomPerson);
    },
    checkIfCorrectPerson(context, person) {
      // if (context.state.gameStatus !== 'RUNNING') return;

      // console.log(`Check if ${person.Name} is correct`);
      // console.log(context.state.currentPerson.Name);
      // console.log(person.Name);
      if (context.state.currentPerson.Id === person.Id) {
        console.log(`${person.Name} is correct!!!`);
        context.commit('GAME_STATUS', 'SUCCESS');
        context.commit('SET_GAME_POINTS', 5);
        context.dispatch('showNextPerson');
      } else {
        console.log(`${person.Name} is incorrect...`);
        context.commit('GAME_STATUS', 'FAILED');
      }
      context.commit('SET_PERSON_DONE', person);
      // console.log(`${context.state.currentPerson} ${person.Id}`);
    },
    setPersonDone(context, person) {
      context.commit('SET_PERSON_DONE', person);
    },
    getPeopleCollection(context) {
      // Loading
      context.commit('SET_PEOPLE_COLLECTION_PENDING', true);
      // context.commit('SET_PEOPLE_COLLECTION', []);

      const call = new Promise((rseolve) => {
        setTimeout(() => {
          context.commit('SET_PEOPLE_COLLECTION', peopleData);
          context.commit('SET_PEOPLE_COLLECTION_SUCCESS', true);
          context.commit('SET_PEOPLE_COLLECTION_FAIL', false);
          context.commit('SET_PEOPLE_COLLECTION_PENDING', false);
          context.commit('RESET_GAME_SESSION');
          rseolve('Success');
        }, 1000);
      });
      call.then(() => {
        context.dispatch('setCurrentToRandom');
        context.dispatch('setRandomPeople', context.state.level);
      });
      // axios
      //   .get('https://www.squeed.com/umbraco/api/squeederapi/getpictures/media/1230/lars-oehrstrand-linkedin.jpg')
      //   // sucess
      //   .then(({ data }) => {
      //     console.log(data);
      //     context.commit('SET_PEOPLE_COLLECTION', data);
      //     context.commit('SET_PEOPLE_COLLECTION_SUCCESS', true);
      //     context.commit('SET_PEOPLE_COLLECTION_FAIL', false);
      //   })
      // // fail
      //   .catch((e) => {
      //     console.log(e);
      //     context.commit('SET_PEOPLE_COLLECTION', null);
      //     context.commit('SET_PEOPLE_COLLECTION_SUCCESS', false);
      //     context.commit('SET_PEOPLE_COLLECTION_FAIL', true);
      //   })
      //   // finally
      //   .finally(() => {
      //     context.commit('SET_PEOPLE_COLLECTION_PENDING', false);
      //   });
    },
  },
  modules: {
    game,
  },
});
