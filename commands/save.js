const ora = require('ora');
const addBookToReadingList = require('../utils/addBookToReadingList.js');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const id = args.id || args._1;
    const saveBook = await addBookToReadingList(id);
    spinner.stop();

    /**********************RESPONSE**************************/
    console.log(
      `\n
      _____________________________________________________________
      \n
      You have successfully saved "${saveBook.data.volumeInfo.title}" to your reading list! \n

      Title: ${saveBook.data.volumeInfo.title}
      Author(s): ${saveBook.data.volumeInfo.authors}
      Publisher: ${saveBook.data.volumeInfo.publisher}

      ID: ${saveBook.data.id}

      _____________________________________________________________
      `
    );
  } catch (error) {
    spinner.stop();
    console.error(error);
  }
};
