module.exports = async (args, cb, spinnerInstance) => {
  spinnerInstance.start();
  try {
    if (!cb) {
      throw new Error('Incorrect callback function passed to list command.');
    } else if (!spinnerInstance) {
      throw new Error('Error with spinner.');
    }
    await cb();
    spinnerInstance.stop();
  } catch (error) {
    spinnerInstance.stop();
    console.error(error);
    return error;
  }
};
