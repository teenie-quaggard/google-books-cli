const mockAxios = require('axios');
const searchUsingId = require('../utils/searchUsingId');
const dummyIdResponse = require('../__fixtures__/dummyIdResponse');

test('it calls Google Books API using an ID and returns one book', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(dummyIdResponse));
  const id = 'bUcdDgAAQBAJ';
  const book = await searchUsingId(id);

  expect(book).toEqual(dummyIdResponse);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://www.googleapis.com/books/v1/volumes/bUcdDgAAQBAJ'
  );
});
