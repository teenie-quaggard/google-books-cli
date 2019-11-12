module.exports = (args, version) => {
  try {
    console.log(`This is version ${version}.`);
    if (!version) {
      throw new Error('Sorry, the current version cannot be found.');
    }
    return version;
  } catch (error) {
    console.error(error);
    return error;
  }
};
