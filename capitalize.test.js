const capitalize = require('./capitalize');

describe('Capitalize tests', () => {
  test('Normal string test', () => {
    expect(capitalize('helloworld')).toBe('Helloworld');
  });

  test('String with numbers in string', () => {
    expect(capitalize('12345')).toBe('12345');
  });

  test('String with all uppercase', () => {
    expect(capitalize('HOHOHO')).toBe('Hohoho');
  });
});

describe('Exceptions', () => {
  test('If its integer', () => {
    expect(capitalize(1)).toBeNull();
  });
});
