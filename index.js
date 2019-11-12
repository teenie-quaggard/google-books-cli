const minimist = require('minimist');
const { version } = require('../package.json');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let command = args._[0] || 'help';

  if (args.help || args.h) {
    command = 'help';
  }

  if (args.version || args.v) {
    command = 'version';
  }

  switch (command) {
    case 'search':
      require('./commands/search')(args);
      break;
    case 'save':
      require('./commands/save')(args);
      break;
    case 'list':
      require('./commands/list')(args);
      break;
    case 'help':
      require('./commands/help')(args);
      break;
    case 'version':
      require('./commands/version')(args, version);
      break;
    default:
      console.error(
        `Sorry, "${command}" is not a valid command. Please type 'books-cli help' to see the help menu.`
      );
      break;
  }
};
