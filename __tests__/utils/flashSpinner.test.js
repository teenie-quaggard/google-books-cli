const flashSpinner = require('../../utils/flashSpinner');

test('waits 1 seconds before showing response', () => {
  jest.useFakeTimers();
  flashSpinner();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
