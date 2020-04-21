import { Eq } from '../Eq';
import { eq } from '../Eq/utils/eq';
import { ord } from './utils/ord';

type LT = -1;
type EQ = 0;
type GT = 1;

export type Ordering = LT | EQ | GT;

export interface Ord<A> extends Eq<A> {
  readonly ord: (x: A, y: A) => Ordering;
}

export const ordNum: Ord<number> = {
  eq,
  ord,
};

export const ordString: Ord<string> = {
  eq,
  ord,
};

export const ordBool: Ord<boolean> = {
  eq,
  ord,
};
