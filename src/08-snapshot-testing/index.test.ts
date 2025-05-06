import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    expect(generateLinkedList([])).toStrictEqual({ value: null, next: null });

    expect(generateLinkedList([1])).toStrictEqual({
      value: 1,
      next: { value: null, next: null },
    });

    expect(generateLinkedList([1, 2, 3])).toStrictEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: { value: null, next: null },
        },
      },
    });
  });

  test('should generate linked list from values 2', () => {
    expect(generateLinkedList([])).toMatchSnapshot();

    expect(generateLinkedList(['a'])).toMatchSnapshot();

    expect(generateLinkedList([1, 2, 3])).toMatchSnapshot();
  });
});
