/* eslint-disable no-console */
/* eslint no-param-reassign: "error" */
import axios from 'axios';

const api = 'https://squeed-squiiz-db.firebaseio.com/';

export default {
  state: {
    highScores: [
      { nickName: 'BosseBildoktor', score: { total: 20, correct: 10 } },
      { nickName: 'OlofB', score: { total: 89, correct: 3 } },
      { nickName: 'Svenpa', score: { total: 3281, correct: 3270 } },
    ],
    gameSession: {
      total: 100,
      correct: 5,
    },
    gamePoints: 0,
    currentQuestion: 1,
  },
  mutations: {
    // increment(state) {
    // `state` is the local module state
    //   state.count++;
    // },
    SET_GAME_POINTS(state, payload) {
      state.gamePoints += payload;
    },
    SET_CURRENT_QUESTION(state) {
      state.currentQuestion += 1;
    },
    SET_GAME_SESSION_TOTAL(state, payload) {
      state.gameSession.total = payload;
    },
    RESET_GAME_SESSION(state) {
      console.log('resetting gamesession');
      state.gameSession = {
        total: 0,
        correct: 0,
      };
    },
    SET_HIGHSCORE(state, payload) {
      console.log(payload);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {

    async setHighScoreToDb(context) {
      const result = await axios.post(
        `${api}/users.json`,
        context.state.user,
      );
      //   context.commit("setHighScores", result.data);
      console.log(result);
      context.commit('SET_HIGHSCORE', result.data);
    },
    getHighScore(context) {
      // Loading
      context.commit('SET_PEOPLE_COLLECTION_PENDING', true);
      // context.commit('SET_PEOPLE_COLLECTION', []);

      axios
        .get(`${api}highScore${context.state.user}`)
      // sucess
        .then(({ data }) => {
          console.log(data);
          context.commit('SET_PEOPLE_COLLECTION', data);
          context.commit('SET_PEOPLE_COLLECTION_SUCCESS', true);
          context.commit('SET_PEOPLE_COLLECTION_FAIL', false);
        })
      // fail
        .catch((e) => {
          console.log(e);
          context.commit('SET_PEOPLE_COLLECTION', null);
          context.commit('SET_PEOPLE_COLLECTION_SUCCESS', false);
          context.commit('SET_PEOPLE_COLLECTION_FAIL', true);
        })
      // finally
        .finally(() => {
          context.commit('SET_PEOPLE_COLLECTION_PENDING', false);
        });
    },
  },
};
