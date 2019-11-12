const mockAxios = require('axios');
const searchUsingKeyword = require('../../utils/searchUsingKeyword');
const dummyKeywordResponse = require('../../__fixtures__/dummyKeywordResponse');

describe('searchUsingKeyword.js', () => {
  it('calls Google Books API and returns books', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(dummyKeywordResponse)
    );
    const keyword = 'dance';
    const books = await searchUsingKeyword(keyword);

    expect(books).toEqual(dummyKeywordResponse);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://www.googleapis.com/books/v1/volumes?q=dance&printType=books&startIndex=0&maxResults=5&projection=lite'
    );
  });

  it('throws an error if a keyword is not inputted by user', async () => {
    const error = await searchUsingKeyword();
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Incorrect keyword input.');
  });

  it('throws an error if a keyword is not received as a string', async () => {
    const error = await searchUsingKeyword(true);
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Incorrect keyword input.');
  });
});
