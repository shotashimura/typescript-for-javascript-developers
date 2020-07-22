export {};

//抽象クラスは抽象メソッドの内部からのみ利用可能
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "ウォー！";
  }
}

//抽象メソッドを挿入しないとエラーになるため、バグを防ぐ
// class Tiger extends Animal {}
//こっちはOK!
class Tiger extends Animal {
  cry() {
    return "ガー！";
  }
}
