const commandParameterCheck = require('../utils/commandParameterCheck');
const errorHandle = require('../utils/errorHandle');
const printSearchResponse = require('../utils/printSearchResponse');

module.exports = async (args, cb, spinnerInstance) => {
  await commandParameterCheck(cb, spinnerInstance);
  spinnerInstance.start();

  try {
    const keyword = args.keyword || args._1;
    const books = await cb(keyword);
    spinnerInstance.stop();

    if (keyword === undefined || (keyword === true && keyword !== 'true')) {
      throw new Error(`
      _____________________________________________________________
      
      Your search phrase returned undefined.  
      Please ensure that you have used the --keyword flag and have followed it with a search term.
      Queries of more than one word should be wrapped in quotation marks.

      Your query should follow one of the following structures: 
      
      books-cli search --keyword word \n
      books-cli search --keyword "search phrase"
      
      Please try searching again.
      _____________________________________________________________
      `);
    } else if (books.data.totalItems === 0) {
      throw new Error(`
      _____________________________________________________________
      
      There were no books that could be matched with that search phrase.  
      Please check your spelling and try again.

      Remember that your query should follow one of the following structures: 
      
      books-cli search --keyword word \n
      books-cli search --keyword "search phrase"
      
      _____________________________________________________________
      `);
    } else {
      printSearchResponse(keyword, books);
    }
  } catch (error) {
    errorHandle(error, spinnerInstance);
  }
};
