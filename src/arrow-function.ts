export {};

//基本形
// let bmi = (height: number, weight: number): number => {
//   return weight / (height * height);
// };

//書き換え可能（returnを省略し一文で書ける）
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.72, 64));
