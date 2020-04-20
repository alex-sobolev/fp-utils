import { addNums } from '../index';

describe('Testing framework setup test', () => {
  it('should add two numbers', () => {
    expect(addNums(1, 2)).toEqual(3);
  });
});
