import {
  combineNumSum,
  combineNumProduct,
  combineStr,
  combineBool,
  combineObj,
} from '../Semigroup';

describe('Semigroup typeclass', () => {
  it('should add two numbers together', () => {
    const { combine } = combineNumSum;
    const x = 13;
    const y = 7;
    const expected = 20;

    expect(combine(x, y)).toEqual(expected);
  });

  it('should multiply two numbers', () => {
    const { combine } = combineNumProduct;
    const x = 10;
    const y = 7;
    const expected = 70;

    expect(combine(x, y)).toEqual(expected);
  });

  it('should concatenate two strings', () => {
    const { combine } = combineStr;
    const x = 'Hello, ';
    const y = 'world!';
    const expected = 'Hello, world!';

    expect(combine(x, y)).toEqual(expected);
  });

  it('should join two booleans', () => {
    const { combine } = combineBool;
    const x = true;
    const y = false;
    const expected = false;

    expect(combine(x, y)).toEqual(expected);
  });

  it('should join two objects', () => {
    const { combine } = combineObj;
    const x = {
      prop1: 'value 1',
      prop2: 'value 2',
    };
    const y = {
      prop2: 'value 3',
      prop3: 'value 4',
    };
    const expected = {
      prop1: 'value 1',
      prop2: 'value 3',
      prop3: 'value 4',
    };

    expect(combine(x, y)).toEqual(expected);
  });
});
