# 8th Light Application - Kristina Jaggard

This is a command line application that allows you to search the [Google Books API](https://developers.google.com/books/docs/overview) and create a reading list.

## 🏁 Getting started 🏁

These instructions assume that you have already downloaded [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/) and that you have a basic understanding of [the command line](https://www.codecademy.com/articles/command-line-commands). 🕺

Open up your terminal and clone this repository in a location of your choosing.
`https://github.com/teenie-quaggard/google-books-api.git`

Navigate into the folder `google-books-api` and install the project dependencies by running `npm i`. For more information about the project dependencies, please see "Dependencies" section below.

## 🤷🏻‍ How to ‍‍‍‍🤷🏻‍

After installing the project dependencies, you will be able to open the command line programme by typing the command `books-cli` into your terminal. You'll need to start your command with `books-cli` every time you want to access the programme.

From within the programme, there are a number of main commands:

### Search command: `books-cli search --keyword`

Use this command followed by a space and a search phrase to return five books related to your query.
If you term is one word you can use it as is; if your search is made up of multiple words, wrap your phrase in quotation marks.

For example:
`books-cli search --keyword dogs`
`books-cli search --keyword 'dog diets'`

Your results will contain five books, including a title, author and publisher, as well as a unique ID.
If you would like to save a book to your reading list, you will need to include that ID.

### Save command: `books-cli save --id`

After you've made a search, use the save command followed by a space the ID of the book you'd like to save to your reading list.

For example:
`books-cli save --id PLcNhqWr7VcC`

- This example command will save a book called _Dinner for Dogs_ by Henrietta Morrison to your reading list.

### List command: `books-cli list`

This command will print any books saved to your reading list to your console.

### Help command: `books-cli help` or `book-cli -h`

This command displays a menu which lists available commands.

### Version command: `books-cli version` or `books-cli -v`

This command displays the current verion of the programme.

## Development process

### 🙋🏻‍ Things I learned

- bin
- Google Books API doesn't need a key (testing via Postman)
- local storage is only on the front end!
- argv

Resources:
https://timber.io/blog/creating-a-real-world-cli-app-with-node/
https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
https://developers.google.com/books/docs/v1/using

## 🧘🏻‍ Stretch goals

- Remove items from reading list
- Search by author
- Search by title

## Dependencies

### [Axios](https://www.npmjs.com/package/axios)

- used to simplify HTTP requests & automatically parse JSON

### Minimist(https://www.npmjs.com/package/minimist)

- allows us to parse arguments in our command line

### Ora(https://www.npmjs.com/package/ora)

- simple loading spinner to give our command line programme a bit of flair!

### [Jest](https://jestjs.io/en/)

- a JavaScript testing framework
