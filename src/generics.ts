export {};

//型が違うだけで、同じ役割をする関数を一つに扱うのがgenericsの特徴
// const echo = (arg: number): number => {
//   return arg;
// };
// const echo = (arg: string): string => {
//   return arg;
// };

//慣習としたよく「T」が使われる、型引数の略
const echo = <T>(arg: T): T => {
  return arg;
};
//型の異なる関数をスピーディに実装できる
console.log(echo<number>(100));
console.log(echo<string>("hello"));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
//インスタンス生成時に型を指定
console.log(new Mirror<number>(123).echo()); //123
console.log(new Mirror<string>("hello").echo()); //hello
console.log(new Mirror<boolean>(true).echo()); //true
