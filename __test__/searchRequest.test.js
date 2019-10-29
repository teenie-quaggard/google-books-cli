const searchRequest = require('../utils/searchRequest');
const mockAxios = require('../__mocks__/getAxios');
const dummyResponse = require('../__fixtures__/dummyResponse');

test('makes get request to Google Books API', () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve(dummyResponse.items)
  );

  const keyword = 'dance';

  return searchRequest(keyword).then(response => {
    expect(response).toEqual(dummyResponse.items);
  });
});
