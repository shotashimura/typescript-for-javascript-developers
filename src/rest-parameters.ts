export {};

const reducer = (accumulater: number, currentValue: number) => {
  return accumulater + currentValue;
};

//引数の総和をreturn関数
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

sum(1, 2, 3, 4, 5); //15

// [1, 2, 3, 4].reduce(reducer);
