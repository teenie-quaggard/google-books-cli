const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const command = args._[0];

  switch (command) {
    case 'books':
      require('./commands/books')(args);
      break;
    default:
      console.error(`Sorry, "${command}" is not a valid command.`);
      break;
  }
};
