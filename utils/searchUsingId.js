const axios = require('axios');
const flashSpinner = require('./flashSpinner');

module.exports = async id => {
  await flashSpinner();
  try {
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return results;
  } catch (error) {
    console.error(error);
  }
};
