const axios = require('axios');

module.exports = async id => {
  try {
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return results;
  } catch (error) {
    console.error(error);
  }
};
