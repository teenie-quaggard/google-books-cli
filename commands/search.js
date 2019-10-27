const ora = require('ora');
const bookRequest = require('../utils/searchRequest.js');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const keyword = args.keyword || args._1;
    const books = await bookRequest(keyword);
    spinner.stop();

    if (keyword === undefined) {
      console.error(`
      _____________________________________________________________
      
      Your search phrase returned undefined.  
      Please ensure that you have used the --keyword flag and have followed it with search term.
      Queries of more than one word should be wrapped in quotation marks.

      Your query should follow one of the following structures: 
      
      books-cli search --keyword word
      books-cli search --keyword "search phrase"
      
      Please try searching again.
      _____________________________________________________________
      `);
    } else {
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
    }
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
