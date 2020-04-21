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

export const eqSymbol: Eq<symbol> = {
  eq,
};

type AnyObject = {
  [key: string]: any;
};

const compareObjects = (x: AnyObject, y: AnyObject): boolean => {
  const xProps: string[] = Object.getOwnPropertyNames(x);
  const yProps: string[] = Object.getOwnPropertyNames(y);

  if (xProps.length !== yProps.length) {
    return false;
  }

  for (const xProp of xProps) {
    if (x[xProp] !== y[xProp]) {
      return false;
    }
  }

  return true;
};

export const eqObj: Eq<AnyObject> = {
  eq: compareObjects,
};
