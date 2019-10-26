const axios = require('axios');

const key = process.env.GOOGLE_BOOKS_API_KEY;

module.exports = async keyword => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite&key=${key}`
    );
    return results.data.items;
  } catch (error) {
    console.error(error);
  }
};
