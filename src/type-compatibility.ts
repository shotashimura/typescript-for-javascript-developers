export {};

let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible); //undefiend

fooCompatible = barCompatible;

console.log(typeof fooCompatible); //string

let fooInCompatible: string;
let barInCompatibele: number = 1;
// fooInCompatible = barInCompatibele; //これはエラーになる

let fooString: string;
let barString: string = "string";
fooString = barString; //これは同じ型のためエラーが出ない

//文字列リテラル型は文字列型の一部
let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  //コメントアウトしてもエラーが発生しない
  age: number;
  name: string;
}
class Person {
  constructor(public age: number, public name: string) {}
}
//オブジェクト間の互換性でも評価される（構造的部分型）
//インターフェイスの型を「=」後にクラスが引き継いでいる
let me: Animal;
me = new Person(43, "simuwo");
