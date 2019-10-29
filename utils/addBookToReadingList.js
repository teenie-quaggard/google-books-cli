const axios = require('axios');
const fs = require('fs');
const flashSpinner = require('./flashSpinner');

module.exports = async id => {
  flashSpinner();
  try {
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    const book = `\nTitle: ${results.data.volumeInfo.title}\nAuthor(s): ${results.data.volumeInfo.authors}\nPublisher: ${results.data.volumeInfo.publisher}\n`;

    fs.appendFile('reading-list.txt', book, err => {
      if (err) {
        console.log(
          `Sorry there's been an error saving your book to the reading list.`
        );
      }
    });

    return results;
  } catch (error) {
    console.error(
      `Sorry, there has been an error. 
      ${error}`
    );
  }
};
