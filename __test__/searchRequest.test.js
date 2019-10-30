const mockAxios = require('axios');
const searchRequest = require('../utils/searchRequest');
const dummyResponse = require('../__fixtures__/dummyResponse');

test('it calls Google Books API and returns books', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(dummyResponse));
  const keyword = 'dance';
  const books = await searchRequest(keyword);

  expect(books).toEqual(dummyResponse);
});
