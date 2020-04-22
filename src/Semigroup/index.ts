import {
  Arr,
  Obj,
  combineSum,
  combineProduct,
  combineStrings,
  combineAll,
  combineAny,
  combineObjects,
  combineArrays,
} from './utils/combine';

export interface Semigroup<A> {
  combine: (x: A, y: A) => A;
}

export const combineNumSum: Semigroup<number> = {
  combine: combineSum,
};

export const combineNumProduct: Semigroup<number> = {
  combine: combineProduct,
};

export const combineStr: Semigroup<string> = {
  combine: combineStrings,
};

export const combineBoolAll: Semigroup<boolean> = {
  combine: combineAll,
};

export const combineBoolAny: Semigroup<boolean> = {
  combine: combineAny,
};

export const combineObj: Semigroup<Obj> = {
  combine: combineObjects,
};

export const combineArr: Semigroup<Arr> = {
  combine: combineArrays,
};
