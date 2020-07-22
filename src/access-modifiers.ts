export {};

class Person {
  //classのトップレベルで型の定義
  //ここにアクセス修飾子を適用
  public name: string;
  private age: number;
  protected nationality: string;
  //constructorの戻り値の型指定は不要
  constructor(name: string, age: number, nationality: string) {
    //初期化処理
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  //privateはclassの内部であれば参照可能。つまりここの関数はageは呼び出しができる
  profile(): string {
    return `name:${this.name},age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    //super()で親クラスのコンストラクター処理を呼び出しできる
    super(name, age, nationality);
  }
  profile(): string {
    //ここでエラーが出ている！！
    //ageはprivateのため、ここでは呼び出し出来ない、protectedは呼び出し可能
    //違いは継承したクラスで呼び出し出来るか、出来ないか
    return `name:${this.name},age: ${this.age},nationality: ${this.nationality}`;
  }
}

//インスタンスを作成。new演算子を利用
let taro = new Person("Taro", 30, "Japan");
//インスタンスに対して呼び出しの制約ができる
console.log(taro.profile()); //privateのageを参照可能
console.log(taro.name); //Taro
console.log(taro.age); //30 //privateのageを参照不可

//publicは書かないことが一般的
