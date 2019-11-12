module.exports = (error, spinnerInstance) => {
  if (!spinnerInstance) {
    console.error(error);
    return error;
  }
  spinnerInstance.stop();
  console.error(error);
  return error;
};
