const ora = require('ora');
const searchUsingKeyword = require('../utils/searchUsingKeyword.js');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const keyword = args.keyword || args._1;
    const books = await searchUsingKeyword(keyword);
    spinner.stop();

    if (keyword === undefined) {
      console.error(`
      _____________________________________________________________
      
      Your search phrase returned undefined.  
      Please ensure that you have used the --keyword flag and have followed it with search term.
      Queries of more than one word should be wrapped in quotation marks.

      Your query should follow one of the following structures: 
      
      books-cli search --keyword word \n
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
        Here are five books related to your search. \n \n \n
        If you are interested in saving a book to your reading list, \n
        copy its listed ID and use the following command to save that book to your reading list. \n
        Remember that you need to replace the last word in the command with the ID of the book you'd like to save. \n \n

        books-cli save --id replaceThisWithYourBookID
        
        _____________________________________________________________
        `
      );
      books.data.items.forEach(book => {
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
