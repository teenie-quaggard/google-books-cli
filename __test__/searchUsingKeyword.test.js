const mockAxios = require('axios');
const searchUsingKeyword = require('../utils/searchUsingKeyword');
const dummyResponse = require('../__fixtures__/dummyKeywordResponse');

test('it calls Google Books API and returns books', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(dummyResponse));
  const keyword = 'dance';
  const books = await searchUsingKeyword(keyword);

  expect(books).toEqual(dummyResponse);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://www.googleapis.com/books/v1/volumes?q=dance&printType=books&startIndex=0&maxResults=5&projection=lite'
  );
});
