const menus = {
  main: `
    search [command] <options>

    search......................search Google API for a book using a keyword. Should be paired with the --keyword flag
    save........................save a book to a reading list using the book ID. Should be paired with the --id flag
    version.....................show package version
    help........................show help menu for a command`,

  books: `
    books-cli search <options>
    --keyword, -k ..... the keyword you want to search`,

  save: `
    books-cli save <options>
    --id, -i ..... the id of the book you'd like to save to your reading list`
};
module.exports = args => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
