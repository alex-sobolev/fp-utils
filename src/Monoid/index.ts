import { Semigroup } from '../Semigroup';
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
} from '../Semigroup/utils/combine';

export interface Monoid<A> extends Semigroup<A> {
  readonly mempty: A;
}

export const monoidNumSum: Monoid<number> = {
  combine: combineSum,
  mempty: 0,
};

export const monoidNumProduct: Monoid<number> = {
  combine: combineProduct,
  mempty: 1,
};

export const monoidStr: Monoid<string> = {
  combine: combineStrings,
  mempty: '',
};

export const monoidBoolAll: Monoid<boolean> = {
  combine: combineAll,
  mempty: true,
};

export const monoidBoolAny: Monoid<boolean> = {
  combine: combineAny,
  mempty: false,
};

export const monoidObj: Monoid<Obj> = {
  combine: combineObjects,
  mempty: {},
};

export const monoidArr: Monoid<Arr> = {
  combine: combineArrays,
  mempty: [],
};
