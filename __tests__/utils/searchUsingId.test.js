const mockAxios = require('axios');
const searchUsingId = require('../../utils/searchUsingId');
const dummyIdResponse = require('../../__fixtures__/dummyIdResponse');

describe('searchUsingId.js', () => {
  it('calls Google Books API using an ID and returns one book', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(dummyIdResponse)
    );
    const id = 'bUcdDgAAQBAJ';
    const book = await searchUsingId(id);

    expect(book).toEqual(dummyIdResponse);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://www.googleapis.com/books/v1/volumes/bUcdDgAAQBAJ'
    );
  });

  it('throws an error if book ID is not passed', async () => {
    const error = await searchUsingId();
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Incorrect book ID input');
  });

  it('throws an error if book ID is not a string', async () => {
    const error = await searchUsingId(true);
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Incorrect book ID input');
  });
});
