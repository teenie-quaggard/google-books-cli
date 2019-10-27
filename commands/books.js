const ora = require('ora');
const bookRequest = require('../utils/bookRequest.js');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const keyword = args.keyword || args._1;
    const books = await bookRequest(keyword);
    spinner.stop();

    /**********************RESPONSE**************************/
    console.log(
      `\n
      _____________________________________________________________
      \n
      You searched for: "${keyword}". \n
      Here are five books related to your search. If you are interested in saving one to your reading list \n
      
      _____________________________________________________________
      `
    );
    books.forEach(book => {
      console.log(`
      Title: ${book.volumeInfo.title}
      Author(s): ${book.volumeInfo.authors}
      Publisher: ${book.volumeInfo.publisher}

      ID: ${book.id}

      ____________________________________________
      `);
    });
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
