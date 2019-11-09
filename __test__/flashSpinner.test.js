const flashSpinner = require('../utils/flashSpinner');

jest.useFakeTimers();

test('waits 2 seconds before showing response', () => {
  flashSpinner();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});
