// test('error should be returned if reading list cannot be printed', () => {
//   return printReadingList(error).then(response => {
//     expect(response).toThrow(Error);
//   });
// });

// Your reading list:
// ___________________________________

// Title: Metaphors We Live By
// Author(s): George Lakoff,Mark Johnson
// Publisher: University of Chicago Press

// const printReadingList = require('../utils/printReadingList');

// jest.mock('fs');

// describe('prints file content', () => {
//   const MOCK_FILE_INFO = {
//     '/reading-list.txt':
//       'Title: Metaphors We Live By\nAuthor(s): George Lakoff,Mark Johnson\nPublisher: University of Chicago Press'
//   };

//   beforeEach(() => {
//     // Set up some mocked out file info before each test
//     require('fs').__setMockFiles(MOCK_FILE_INFO);
//   });

//   test('includes all files in the directory in the summary', () => {
//     const fileSummary = printReadingList();
//     console.log(fileSummary);

//     expect(fileSummary).toBe(
//       'Title: Metaphors We Live By \nAuthor(s): George Lakoff,Mark Johnson \nPublisher: University of Chicago Press'
//     );
//   });
// });

test('initialise', () => {
  expect(1 + 1).toBe(2);
});
