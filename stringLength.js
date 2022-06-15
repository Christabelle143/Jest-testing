function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('The string length is out of range');
  } else {
    return string.length;
  }
}
module.exports = stringLength;
