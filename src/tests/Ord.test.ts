import { ordNum, ordString, ordBool } from '../Ord';

describe('Ord typeclass', () => {
  it('should compare two numbers and return -1 when fst num is less than snd num', () => {
    const { ord } = ordNum;

    expect(ord(20, 1080)).toEqual(-1);
  });

  it('should compare two numbers and return 1 when fst num is greater than snd num', () => {
    const { ord } = ordNum;

    expect(ord(1080, 20)).toEqual(1);
  });

  it('should compare two numbers and return 0 when two nums are equal', () => {
    const { ord } = ordNum;

    expect(ord(47, 47)).toEqual(0);
  });

  it('should compare two strings and return -1 when fst string is less than snd string', () => {
    const { ord } = ordString;

    expect(ord('apple', 'orange')).toEqual(-1);
  });

  it('should compare two strings and return 1 when fst string is greater than snd string', () => {
    const { ord } = ordString;

    expect(ord('orange', 'apple')).toEqual(1);
  });

  it('should compare two strings and return 0 when they are equal', () => {
    const { ord } = ordString;

    expect(ord('apple', 'apple')).toEqual(0);
  });

  it('should compare two booleans and return -1 when fst bool is less than snd bool', () => {
    const { ord } = ordBool;

    expect(ord(false, true)).toEqual(-1);
  });

  it('should compare two booleans and return 1 when fst bool is greater than snd bool', () => {
    const { ord } = ordBool;

    expect(ord(true, false)).toEqual(1);
  });

  it('should compare two booleans and return 0 when they are equal', () => {
    const { ord } = ordBool;

    expect(ord(true, true)).toEqual(0);
  });

  it('should sort an array of strings in ascending order', () => {
    const sortStringArr = (arr: string[]): string[] => arr.sort(ordString.ord);
    const before = ['jack', 'slim', 'alex'];
    const after = ['alex', 'jack', 'slim'];

    expect(sortStringArr(before)).toEqual(after);
  });

  it('should sort an array of strings in descending order', () => {
    const sortStringArr = (arr: string[]): string[] => arr.sort((x, y) => ordString.ord(x, y) * -1);
    const before = ['jack', 'slim', 'alex'];
    const after = ['slim', 'jack', 'alex'];

    expect(sortStringArr(before)).toEqual(after);
  });
});
