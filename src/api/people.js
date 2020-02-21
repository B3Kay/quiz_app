/* eslint-disable no-console */
const axios = require('axios');

// Make a request for a user with a given ID
export default {
  fetchSqueeders() {
    axios.get('https://www.squeed.com/umbraco/api/squeederapi/getpictures')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  },
};
