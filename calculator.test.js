const Calculator = require('./calculator');

const mycalculator = new Calculator();
describe('calculate', () => {
  test('addition', () => {
    expect(mycalculator.add(5, 6)).toBe(11);
    expect(mycalculator.add(-5, -6)).toBe(-11);
    expect(mycalculator.add(-3, 6)).toBe(3);
    expect(mycalculator.add(0, -1)).toBe(-1);
  });
  test('subtraction', () => {
    expect(mycalculator.subtract(5, 6)).toBe(-1);
    expect(mycalculator.subtract(-5, -6)).toBe(1);
    expect(mycalculator.subtract(-3, 6)).toBe(-9);
    expect(mycalculator.subtract(0, -1)).toBe(1);
  });
  test('multiplying', () => {
    expect(mycalculator.multiply(5, 6)).toBe(30);
    expect(mycalculator.multiply(0, -5)).toBe(-0);
    expect(mycalculator.multiply(-5, 2)).toBe(-10);
  });
  test('dividing', () => {
    expect(mycalculator.divide(5, 6)).toBeCloseTo(0.83);
    expect(mycalculator.divide(0, -5)).toBe(-0);
    expect(mycalculator.divide(-5, 2)).toBe(-2.5);
  });
});
