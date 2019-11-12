const errorHandle = './errorHandle';
module.exports = (cb, spinnerInstance) => {
  try {
    if (!cb) {
      throw new Error('Incorrect callback function passed to list command.');
    } else if (!spinnerInstance) {
      throw new Error('Error with spinner.');
    }
    return true;
  } catch (error) {
    errorHandle(error, spinnerInstance);
  }
};
