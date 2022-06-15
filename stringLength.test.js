const stringLength = require('./stringLength');

test('returns string length', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength("I'm here")).toBe(8);
  expect(() => stringLength('')).toThrow('The string length is out of range');
  expect(() => stringLength('This is my house')).toThrow(
    'The string length is out of range',
  );
});
