export {};

class Person {
  //  ここをバッサリ
  //  public name: string;
  //  protected age: number;

  // ！constractorの引数の中でアクセス修飾子をつけれる
  // 一見、初期化処理を行っているように見えないため、よく覚えておくこと！
  constructor(public name: string, protected age: number) {
    // ここもバッサリ
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person("しむを", 26);
console.log(me);
