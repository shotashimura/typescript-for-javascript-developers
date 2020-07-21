export {};

class Person {
  //classのトップレベルで型の定義
  name: string;
  age: number;
  //constructorの戻り値の型指定は不要
  constructor(name: string, age: number) {
    //初期化処理
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name:${this.name},age: ${this.age}`;
  }
}
//インスタンスを作成。new演算子を利用
let taro = new Person("Taro", 30);
console.log(taro.profile());
