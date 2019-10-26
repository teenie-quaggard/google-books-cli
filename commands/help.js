const menus = {
  main: `
    search [command] <options>

    books.......................search Google API for a book using a keyword
    version.....................show package version
    help........................show help menu for a command`,

  books: `
    search books <options>
    --keyword, -k ..... the keyword you want to search`
};
module.exports = args => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
