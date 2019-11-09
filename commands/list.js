const printReadingList = require('../utils/printReadingList');
const Spinner = require('../utils/spinner');

module.exports = async () => {
  const spinnerInstance = new Spinner();
  spinnerInstance.start();

  try {
    await printReadingList();
    spinnerInstance.stop();
  } catch (error) {
    spinnerInstance.stop();
    console.error(
      `Sorry, there's been an error fetching your list: \n${error})`
    );
  }
};
