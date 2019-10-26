const axios = require('axios');

module.exports = async keyword => {
  try {
    const results = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=power&printType=books&startIndex=0&maxResults=5&projection=lite'
    );
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
