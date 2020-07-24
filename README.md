# typescript-for-javascript-developers

TypeScriptにおける様々な種類の型

```typescript:typeSumple.ts
// 基本形
// 変数名 :　型の指定　=　値;

// number型:数字のみ定義可能
let thisYear: number = 2020; 
// thisYear = "今年は2020年"//"今年は2020年"は文字列のため代入不可
console.log(thisYear); //2020

// string型:文字のみ定義可能
let myHometown: number = "Tokyo"; 
console.log(myHometown); //Tokyo

// boolean型:true or falseのみ定義可能
let flag: boolean = true; 
flag = false; 
console.log(flag);

// any型（APIからのGET時などの型の中身が分からない時に利用）
// 極力使わないようにする
let data :any = response.data; 
// interfaceを利用して正確な型を指定することが望ましい
interface userInfo { 
     id: number; 
     name: string; 
     age: number; 
} 
let data: userInfo[] = response.data;
console.log(data);

// void型(関数の戻り値に対する型指定が出来る)
function noReturn(): void {
   console.log("何もreturnしないよ");
   //undefiendを型に指定する場合は、「return undefiend」とする
   //return undefiend;
 }

// null型
let data: null = null;
// data = "something"は代入不可
// undefiened型
let data: undefined = undefined;
// nullとundefinedの違い
// 意図を持って値がないことを意味するのが null。単に値が代入されていないことを意味するのが undefined

// never型(関数の中で例外処理をするときに利用)
function error(message: string): never {
  throw new Error(message);
}
try {
  let result = error("chk");
  console.log(result);
} catch (error) {
  console.log(error);
}
// void型とnever型の違い
// void型はreturnする値がないことを意味する一方で、never型はそもそも値が戻らないことを意味する
let foo: void = undefined;
// errorだけ代入可能
let bar: never = error("only me");

// unknown型(不明な値をセキュアに運用しany型の実行するまでエラーに気がつかないリスクをヘッジする)
const num = (): number => 30;
let numberUnkown: unknown = num();
// コンパイルエラー発生
// console.log(typeof numberUnkown); //number
//if文で型をcheckすることで（タイプガードという）、コンパイルエラーが発生しない
if (typeof numberUnkown === "number") {
  let total = numberUnkown + 10;
}
console.log(total); // 40

// union型(パイプ（|）で繋ぐ事により、今回のケースではnumberかstringを入れられる型を指定)
let value: number | string = 1;
value = "foo";

✳︎

// Array形
// 変数名 :　型の指定[]　=　[値];

// numberが入る配列として指定
let numbers: number[] = [10, 100, 1000]; 
// stringが入る配列として指定
let Beatles: string[] = ["John", "Paul", "George", "Ringo"];
// 二次元配列 の場合は[]を２つにする
let twinStrings: string[][] = [
   ["Luffy", "ONEPIECE"], 
   ["Tanjiro", "Kimetsu"], 
 ]; 
// 複数の型を同時に定義する際はパイプで列挙する
let myInfo: (string | number | boolean)[] = ["man", 26, true]; 

// tuple型（型の順番に制約を持たせたい時に利用）
let myFavorite: [string, number] = ["myFavNum", 10];
// 型の順番が決まっているので、[10,"myFavNum"];はエラーになる（型推論では表示されない）

// object型(型の制約が弱いので注意)
// ageを代入可能
let myObject: object = { name: "simuwo" };
myObject = { age: 26 };
// 波括弧でnameを指定の型を指定したことにより、string型のnameのみが代入可能
let myObject: { name: string } = { name: "simuwo" };
myObject = { name: "john" };

✳︎

// その他

// 型エイリアス(型に対して命名が出来る)
type stringName = string;
const greeting: stringName = "hello";
// objectも可能
type userInfo = {
  name: string;
  age: number;
};
const userA: userInfo= {
  name: "simuwo",
  age: 26,
};
// objectから型エイリアスを用いた型を利用することも可能
const userB = {
  name: "non",
  age: 27,
};
type userInfo2 = typeof userB;

// interface(型エイリアスと同様のことが出来る)
interface ObjectInterface {
  name: string;
  age: number;
}
let object: ObjectInterface = {
  name: "simuwo",
  age: 26,
};

// intersection型(既存の型を利用して、新しい型を作る)
type myGoals = {
  myGoalcount: number;
};
type yourGoals = {
  yourGoalcount: number;
};
type matchResult = myGoals & yourGoals;
const today: matchResult = {
  myGoalcount: 3,
  yourGoalcount: 0,
};

// literal型（代入できる値を厳格に設定）
//「red」しか指定できないように設定することも可能
let myFavColor: "red" = "red";
//union型と組み合わせる
let Beatles: "John" | "Paul" | "George" | "Ringo" = "John";
Beatles = "Paul";
let myFavNum: 1 | 4 | 7 | 8 | 11 | 99  = 7;
month = 11;
//falseが設定できない
let TRUE: true = true;

// enum型(複数の定数をひとつにまとめておくことができる型)
enum Months {
//このケースでは、Januaryをoverrideしている
  January = 1,
  February,
  Marth,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(Months.January); //0 //overrideすると１
console.log(Months.February); //1 //overrideすると２

```
