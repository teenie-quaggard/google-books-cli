const printReadingList = require('../utils/printReadingList');
const ora = require('ora');

module.exports = async () => {
  const spinner = ora().start();

  try {
    await printReadingList();
    spinner.stop();
  } catch (error) {
    spinner.stop();
    console.error(`Sorry, there's been an error fetching your list: \n${error});
  }
};
