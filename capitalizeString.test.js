const capitalizeString = require('./capitalizeString');

test('return string with first letter capitalized', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});
