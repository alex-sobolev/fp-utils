export interface Semigroup<A> {
  combine: (x: A, y: A) => A;
}

export const combineNumSum: Semigroup<number> = {
  combine: (x: number, y: number) => x + y,
};

export const combineNumProduct: Semigroup<number> = {
  combine: (x: number, y: number) => x * y,
};

export const combineStr: Semigroup<string> = {
  combine: (x: string, y: string) => x + y,
};

export const combineBool: Semigroup<boolean> = {
  combine: (x: boolean, y: boolean) => x && y,
};

type Obj = {
  [key: string]: any;
};

export const combineObj: Semigroup<Obj> = {
  combine: (x: Obj, y: Obj) => ({ ...x, ...y }),
};

type Arr = any[];

export const combineArr: Semigroup<Arr> = {
  combine: (x: Arr, y: Arr) => [...x, ...y],
};
