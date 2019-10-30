const mockAxios = require('axios');
const searchRequest = require('../utils/searchRequest');
const dummyResponse = require('../__fixtures__/dummyResponse');

test('it calls Google Books API and returns books', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(dummyResponse));
  const keyword = 'dance';
  const books = await searchRequest(keyword);

  expect(books).toEqual(dummyResponse);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://www.googleapis.com/books/v1/volumes?q=dance&printType=books&startIndex=0&maxResults=5&projection=lite'
  );
});
