export type Obj = {
  [key: string]: any;
};

export type Arr = any[];

export const combineSum = (x: number, y: number) => x + y;

export const combineProduct = (x: number, y: number) => x * y;

export const combineStrings = (x: string, y: string) => x + y;

export const combineObjects = (x: Obj, y: Obj) => ({ ...x, ...y });

export const combineArrays = (x: Arr, y: Arr) => [...x, ...y];

export const combineAll = (x: boolean, y: boolean) => x && y;

export const combineAny = (x: boolean, y: boolean) => x || y;
