import { compareObjectsForEq, Obj } from './utils/compareObjectsForEq';
import { eq } from './utils/eq';

export interface Eq<A> {
  readonly eq: (x: A, y: A) => boolean;
}

export const eqNum: Eq<number> = {
  eq,
};

export const eqString: Eq<string> = {
  eq,
};

export const eqBool: Eq<boolean> = {
  eq,
};

export const eqSymbol: Eq<symbol> = {
  eq,
};

export const eqObj: Eq<Obj> = {
  eq: compareObjectsForEq,
};
