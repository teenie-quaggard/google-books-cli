const commandParameterCheck = require('../utils/commandParameterCheck');
const errorHandle = require('../utils/errorHandle');
const printSearchResponse = require('../utils/printSearchResponse');

module.exports = async (args, searchUsingKeyword, spinnerInstance) => {
  await commandParameterCheck(searchUsingKeyword, spinnerInstance);
  spinnerInstance.start();

  try {
    const keyword = args.keyword || args._1;
    const books = await searchUsingKeyword(keyword);
    spinnerInstance.stop();

    if (books.data.totalItems === 0) {
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
