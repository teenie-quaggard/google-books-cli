const fs = require('fs');
const flashSpinner = require('./flashSpinner');
const searchUsingId = require('./searchUsingId');

module.exports = async id => {
  await flashSpinner();
  try {
    const book = await searchUsingId(id);

    const bookData = `\nTitle: ${book.data.volumeInfo.title}\nAuthor(s): ${book.data.volumeInfo.authors}\nPublisher: ${book.data.volumeInfo.publisher}\n`;

    await fs.appendFile('reading-list.txt', bookData, err => {
      if (err) {
        console.log(
          `Sorry there's been an error saving your book to the reading list.`
        );
      }
    });

    return book;
  } catch (error) {
    console.error(
      `Sorry, there has been an error. 
      ${error}`
    );
  }
};
