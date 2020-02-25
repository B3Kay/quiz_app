/* eslint-disable no-console */
/* eslint no-param-reassign: "error" */
import axios from 'axios';

const api = 'https://squeed-squiiz-db.firebaseio.com/';

export default {
  state: {
    //
  },
  mutations: {
    // increment(state) {
    // `state` is the local module state
    //   state.count++;
    // },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    //
  },
  actions: {


    async getUser(context) {
      const result = await axios.get(
        `${api}/users.json`,
        context.state.user,
      );
      //   context.commit("setHighScores", result.data);
      console.log(result);
      context.commit('SET_HIGHSCORE', result.data);
    },
    async updateUser(context) {
      const result = await axios.put(
        `${api}/users.json`,
        context.state.user,
      );
        //   context.commit("setHighScores", result.data);
      console.log(result);
      context.commit('SET_HIGHSCORE', result.data);
    },
  },
};
