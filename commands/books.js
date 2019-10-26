const ora = require('ora');
const bookRequest = require('../utils/bookRequest.js');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const keyword = args.keyword || args._1;
    const books = await bookRequest(keyword);
    spinner.stop();

    /**********************RESPONSE**************************/
    console.log(`You searched for "${keyword}".`);
    books.forEach(book => {
      const info = book.volumeInfo;

      console.log(`
      Title: ${info.title}
      Author(s): ${info.author}
      Publisher: ${info.publisher}
      Date published: ${info.publishedDate}
      Description: ${info.description}

      _____________________________________________

      `);
    });
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
