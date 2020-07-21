export {};

//無名関数
//アノテートをしない場合
// let bmi = function bmi(height: number, weight: number): number {
//   return weight / (height * height);
// };

//アノテートをする場合
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.72, 64));
