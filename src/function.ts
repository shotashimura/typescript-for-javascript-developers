export {};

//覚えることは２つ！
//引数と関数の戻り値に対して、型を付ける
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.72, 64));
