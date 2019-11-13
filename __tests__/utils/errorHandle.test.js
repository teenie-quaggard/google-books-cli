const errorHandle = require('../../utils/errorHandle');

describe('errorHandle function', () => {
  it('returns an error if not passed a spinnerInstance', async () => {
    const error = { name: 'Error', message: "Sorry there's been a problem." };
    const errorHandleFunction = await errorHandle(error);
    expect(errorHandleFunction.name).toBe('Error');
    expect(errorHandleFunction.message).toBe(
      "Sorry, there's been an error with the Spinner"
    );
    expect(typeof errorHandleFunction).toBe('object');
  });

  it('returns an error if not not passed an error or spinnerInstance', async () => {
    const errorHandleFunction = await errorHandle();
    expect(errorHandleFunction.name).toBe('Error');
    expect(errorHandleFunction.message).toBe(
      'Sorry, the errorHandle function needs to be passed an error and a spinnerInstance.'
    );
    expect(typeof errorHandleFunction).toBe('object');
  });

  it('returns an error if not passed an error', async () => {
    const spinnerInstance = { stop: () => true };
    const errorHandleFunction = await errorHandle(undefined, spinnerInstance);
    expect(errorHandleFunction.name).toBe('Error');
  });
});
