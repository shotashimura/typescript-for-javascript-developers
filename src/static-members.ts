export {};

//静的メンバとはいつも変化せず、newによってインスタンスを作らなくても可の時に作るもの

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Suzuki";
  static lestName: string = "Ichiro";

  //メソッドにもstaticはつけれる
  static work() {
    //this.firstNameはMe.firstNameでも可能
    return `hi! my name is ${this.firstName}!`;
  }
}

let me = new Me();
//静的メンバへのアクセスはクラス名からのアクセス
console.log(Me.isProgrammer); //true
console.log(Me.work()); //hi! my name is Suzuki!
//staticをつけ動的から静的に変わると、エラーになる
// console.log(me.isProgrammer); //true
