const reverseString = require('./reverseString');

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
