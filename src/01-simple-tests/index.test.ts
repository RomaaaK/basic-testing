import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 5, b: 3, action: Action.Add });
    expect(result).toBe(8);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 5, b: 3, action: Action.Subtract });
    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 5, b: 3, action: Action.Multiply });
    expect(result).toBe(15);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 6, b: 2, action: Action.Divide });
    expect(result).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 6, b: 2, action: '++' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const invalidInputs = [
      { a: 6, b: 'a', action: Action.Add },
      { a: 'r', b: 2, action: Action.Subtract },
      { a: null, b: undefined, action: Action.Multiply },
    ];

    for (const input of invalidInputs) {
      const result = simpleCalculator(input);
      expect(result).toBeNull();
    }
  });
});
