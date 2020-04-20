export interface Eq<A> {
  readonly eq: (x: A, y: A) => boolean;
}

const eq = <A>(x: A, y: A): boolean => x === y;

export const eqNum: Eq<number> = {
  eq,
};

export const eqString: Eq<string> = {
  eq,
};

export const eqBool: Eq<boolean> = {
  eq,
};
