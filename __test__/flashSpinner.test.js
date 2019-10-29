const flashSpinner = require('../utils/flashSpinner');

jest.useFakeTimers();

test('waits 1 second before showing response', () => {
  flashSpinner();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
