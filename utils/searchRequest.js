const axios = require('axios');
const flashSpinner = require('./flashSpinner');

module.exports = async keyword => {
  flashSpinner();
  try {
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
    );
    console.log('results', results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
