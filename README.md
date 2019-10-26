# 8th Light Application - Kristina Jaggard

This is a command line application that allows you to search the [Google Books API](https://developers.google.com/books/docs/overview) and create a reading list.

## 🏁 Getting started 🏁

These instructions assume that you have already downloaded [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/) and that you have a basic understanding of [the command line](https://www.codecademy.com/articles/command-line-commands). 🕺

Open up your terminal and clone this repository.
`https://github.com/teenie-quaggard/google-books-api.git`

Navigate into the folder `google-books-api` and install the project dependencies by running `npm i`. For more information about the project dependencies, please see "Dependencies" section below.

In order to run this application, you will need to have a Google account so that you can generate an API key to Google Books. For more information on how to do this [please check out the Google Book API documentation](https://developers.google.com/books/docs/v1/using).

Once you have generated a unique Google Books API key, create a file named `.env` in the root of this repository. The file `sample.env` has been created to provide you with a template as to how your API key should be stored.

## 🤷🏻‍ How to ‍‍‍‍🤷🏻‍

After installing the project dependencies, you will be able to open the command line programme by typing the command `search` into your terminal.

## Development process

### 🙋🏻‍ Things I learned

- bin

### 🤦🏻‍ Things I've struggled with

- the process of creating a command line tool

## 🧘🏻‍ Stretch goals

- Remove items from reading list

## Dependencies

### Projet Dependencies

#### [dotenv](https://www.npmjs.com/package/dotenv)

- a module that loads environment variables from a .env file into `process.env`
- stores our API key to keep it from being pushed to Github

### Dev Dependencies

### [Jest](https://jestjs.io/en/)

- a JavaScript testing framework
