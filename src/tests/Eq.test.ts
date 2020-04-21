import { eqNum, eqString, eqBool, eqObj, eqSymbol } from '../Eq';

describe('Eq typeclass', () => {
  it('should compare two numbers for equality and return true when numbers are equal', () => {
    const { eq } = eqNum;

    expect(eq(3, 3)).toEqual(true);
  });

  it('should compare two numbers for equality and return false when numbers are different', () => {
    const { eq } = eqNum;

    expect(eq(1, 3)).toEqual(false);
  });

  it('should compare two strings for equality and return true when they are equal', () => {
    const { eq } = eqString;

    expect(eq('test', 'test')).toEqual(true);
  });

  it('should compare two strings for equality and return false when they are different', () => {
    const { eq } = eqString;

    expect(eq('x', 'y')).toEqual(false);
  });

  it('should compare two boolean values for equality and return true when they are same', () => {
    const { eq } = eqBool;

    expect(eq(false, false)).toEqual(true);
  });

  it('should compare two boolean values for equality and return true when they are different', () => {
    const { eq } = eqBool;

    expect(eq(false, true)).toEqual(false);
  });

  it('should compare two objects of any shape and return true when they are deep equal', () => {
    const { eq } = eqObj;
    const obj1 = {
      prop1: 1,
      prop2: 'test',
    };
    const obj2 = {
      prop2: 'test',
      prop1: 1,
    };

    expect(eq(obj1, obj2)).toEqual(true);
  });

  it('should compare two objects of any shape and return false when they are not deep equal', () => {
    const { eq } = eqObj;
    const obj1 = {
      prop1: 1,
      prop2: 'x',
    };
    const obj2 = {
      prop1: 1,
      prop2: 'y',
    };

    expect(eq(obj1, obj2)).toEqual(false);
  });

  it('should compare two symbols and return false when they are not the same symbol', () => {
    const { eq } = eqSymbol;
    const x = Symbol('x');
    const y = Symbol('x');

    expect(eq(x, y)).toEqual(false);
  });
});
