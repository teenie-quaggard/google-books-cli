const ora = require('ora');
const bookRequest = require('../utils/bookRequest.js');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const keyword = args.keyword || args[1];
    const books = await bookRequest(keyword);

    spinner.stop();
    console.log(
      `Here are some books that have matched with your keyword: ${books}`
    );
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
