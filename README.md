# 8th Light Application - Kristina Jaggard

This is a command line application that allows you to search the [Google Books API](https://developers.google.com/books/docs/overview) and create a reading list.

## 🏁 Getting started

These instructions assume that you have already downloaded [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/) and that you have a basic understanding of [the command line](https://www.codecademy.com/articles/command-line-commands). 🕺

1. Open up your terminal and clone this repository in a location of your choosing.

`git clone https://github.com/teenie-quaggard/google-books-api.git`

2. Navigate into the folder google-books-api folder.

`cd google-books-api`

3. Install the project dependencies by running `npm i` from within the google-books-api folder.

For more information about the project dependencies, please see the "Dependencies" section below.

## 🤷 How to

After installing the project dependencies, you will be able to open the command line programme by typing the command `books-cli` into your terminal. You'll need to start your command with `books-cli` every time you want to access the programme.

From within the programme, there are a number of main commands:

### Search command

`books-cli search --keyword yourKeywordHere`

Use this command followed by a space, the `--keyword` flag and a search phrase to return five books related to your query.

If your seach term is one word you can use it as is; if your search is made up of multiple words, wrap your phrase in quotation marks.

For example:
`books-cli search --keyword dogs`
`books-cli search --keyword 'dog diets'`

Your results will contain five books, including a title, author and publisher, as well as a unique ID.

If you would like to save a book to your reading list, you will need to use that ID.

### Save command

`books-cli save --id`

After you've made a search, select and copy the ID of the book you'd like to save to your reading list.

On a Mac, you can highlight the ID and copy it using the command `Command-C`. On a PC, use the command `Ctrl C`.

Use the save command followed by a space and the ID of the book you'd like to save to your reading list.

For example:
`books-cli save --id PLcNhqWr7VcC`

- This example command will save a book called _Dinner for Dogs_ by Henrietta Morrison to your reading list.

### List command

`books-cli list`

This command will print any books saved to your reading list to your console.

### Help command

`books-cli help` or `book-cli -h`

This command displays a menu which lists available commands.

### Version command

`books-cli version` or `books-cli -v`

This command displays the current verion of the programme.

## 🤖 Run some test

To run tests, write the following command in your terminal:

`npm test`

## 🙋🏻‍Things I learned

### The `bin` file

This process taught me how to use a `bin` file to run my programme when using the command `books-cli`.

### Always read the docs carefully

I started the project by getting an API key from Google Books and by installing and configuring the dependency dotenv. What I noticed a few days later, was that given that I was only making get requests, I didn't need to use a key. The lesson here is to not make assumptions and check out the documentation first!

### Local storage

My initial thoughts were to use local storage to save the user's reading list. In this process, I learned that local storage is only available the the browser side! Instead, I familiarized myself with the fs Node Module.

### Mocking external modules - Axios

This was the first time that I learned how to mock modules with Jest. I've only really scratched the surface here.

### Testing

I am ashamed to say that in the past I've really shied away from writing tests. Largely, this has been due to a lack of understanding the underpinning methodologies. I have always seen the benefits of creating well tested code bases, but I wasn't really sure how to implement tests within my code.

From this project, I learned two main things:

1. Dependency injection: what is it and how it help us test
2. Error handling: how tests can drive error handling and how there are two types of errors (operational and programmer)

### Dependency Injection

To me, learning to inject dependencies meant that I could:

1. Further modularise my code so that I could reduce the responsibility of each function
2. Test that my functions were being passed the correct parameters (and error handle where necessary)
3. Reuse parts of my code in places that I hadn't before.

### Error handling

Although I had been introduced to error handling while on the Founders and Coders boot camp, this was something that I hadn't really implemented in any of my recent projects. In this project, I learned how to throw and catch errors, as well as how to create my own custom errors. Largely, I used the throw error class to test against. What I mean by this is that I would run my functions with incorrect parameters in my test suites and check that returned with the errors that I had created.

## 🤔Things I struggled with

The biggest thing I struggled with was creating tests for the functions that use the 'fs' node module (`utils/printReadingList.js` & `utils/addBookToReadingList.js`).

The Jest docs taught me how to create a mock file system, but I had trouble mocking fs.readFile, especially when my function was not actually returning anything, it was just creating a console.log.

I spent a lot of time researching how to test user input into the command line in order to create integration tests. This is totally possible, but is not actually what my code reviewer had asked for! Instead I focused on refactoring my existing code and creating unit tests.

One question I had was that I was unsure of how much modularisation was too much. As I tested my code, it became apparent that I could modularise further and further. Is there a point where splintering my code up into many tiny files actually hinders its legibility? Coming off of that, I was also unsure of best practices for file structure. This is something that could certainly be improved upon.

Another question I had was that I was unsure of when to throw errors. With the modularisation of my code, errors are passed from one function to another. Is it better practice to pass an error to the highest layer, or is it better to throw an error in the place it breaks (or both)?! 

## 🧘🏻‍Stretch goals

- More tests! (Unit & integration).
- Programmatically save items (not using a copy and paste method, but being able to select an item in the list by index or other selector)
- Remove items from reading list
- Search by author
- Search by title

## 🛠 Dependencies

### [Axios](https://www.npmjs.com/package/axios)

- used to simplify HTTP requests & automatically parse JSON

### [Minimist](https://www.npmjs.com/package/minimist)

- allows us to parse arguments in our command line

### [Ora](https://www.npmjs.com/package/ora)

- simple loading spinner to give our command line programme a bit of flair!

### [Jest](https://jestjs.io/en/)

- a JavaScript testing framework

### [@babel/plugin-proposal-class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)

- allows us to transform static class properties so that they can be handled by Jest

## Helpful Resources:

https://timber.io/blog/creating-a-real-world-cli-app-with-node/

https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

https://developers.google.com/books/docs/v1/using
