const axios = require('axios');
const flashSpinner = require('./flashSpinner');

module.exports = async keyword => {
  await flashSpinner();
  try {
    if (!keyword || typeof keyword !== 'string') {
      throw new Error('Incorrect keyword input.');
    }

    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
    );

    return results;
  } catch (error) {
    if (error.message === 'Request failed with status code 503') {
      throw new Error(
        "Sorry, there's been a problem. It's likely that you have used a keyword that could not be found on the Google Books database. Check that your keyword is spelled correctly and try again."
      );
    }
    console.error(error);
    return error;
  }
};
