const fs = require('fs');
const flashSpinner = require('./flashSpinner');

module.exports = async () => {
  await flashSpinner();
  await fs.readFile('reading-list.txt', 'utf8', (err, list) => {
    if (err) {
      console.error(`There's been an issue finding your list!\n${err}`);
    } else if (!list) {
      console.log(`Your reading list is empty.`);
    } else {
      console.log(
        `Your reading list:\n___________________________________\n\n${list}`
      );
    }
  });
};
