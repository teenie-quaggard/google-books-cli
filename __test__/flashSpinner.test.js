const flashSpinner = require('../utils/flashSpinner');

test('waits 2 seconds before showing response', () => {
  jest.useFakeTimers();
  flashSpinner();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});
