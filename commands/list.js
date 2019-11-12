const Spinner = require('../utils/spinner');
module.exports = async (args, cb) => {
  const spinnerInstance = new Spinner();
  spinnerInstance.start();

  try {
    await cb();
    spinnerInstance.stop();
  } catch (error) {
    spinnerInstance.stop();
    console.error(
      `Sorry, there's been an error fetching your list: \n${error})`
    );
  }
};
