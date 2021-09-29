const Calculator = require('./calculator');

describe('Adding numbers', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Calculator.sum(1, 2)).toBe(3);
  });
  test('adds 0 + 99 to equal 99', () => {
    expect(Calculator.sum(0, 99)).toBe(99);
  });
  test('adds 99 + 99 to equal 198', () => {
    expect(Calculator.sum(99, 99)).toBe(198);
  });
});

describe('Subtract numbers', () => {
  test('subtract 1 - 2 to equal -1', () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });
  test('subtract 25 + 10 to equal 15', () => {
    expect(Calculator.subtract(25, 10)).toBe(15);
  });
  test('subtract 99 - 99 to equal 0', () => {
    expect(Calculator.subtract(99, 99)).toBe(0);
  });
});

describe('Divide numbers', () => {
  test('divide 2 : 2 to equal 1', () => {
    expect(Calculator.divide(2, 2)).toBe(1);
  });
  test('divide 12 : 3 to equal 4', () => {
    expect(Calculator.divide(12, 3)).toBe(4);
  });
  test('adds 10 : 1 to equal 10', () => {
    expect(Calculator.divide(10, 1)).toBe(10);
  });
});

describe('Multiply numbers', () => {
  test('multiply 1 * 5 to equal 5', () => {
    expect(Calculator.multiply(1, 5)).toBe(5);
  });
  test('multiply 0 * 99 to equal 0', () => {
    expect(Calculator.multiply(0, 99)).toBe(0);
  });
  test('multiply 6 * 7 to equal 42', () => {
    expect(Calculator.multiply(6, 7)).toBe(42);
  });
});
