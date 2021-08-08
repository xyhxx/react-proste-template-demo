import { filter } from '../shared';

test('filter is success', () => {
  const testArray = [1, 2, 3, 4, 5];
  const result = filter<number, number>(testArray, val => val > 2);

  expect(result).toEqual([3, 4, 5]);
});