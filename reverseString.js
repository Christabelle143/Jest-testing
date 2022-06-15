function reverseString(string) {
  const newString = string.split('').reverse().join('');
  return newString;
}
module.exports = reverseString;
