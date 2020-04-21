export type Obj = {
  [key: string]: any;
};

export const compareObjects = (x: Obj, y: Obj): boolean => {
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
