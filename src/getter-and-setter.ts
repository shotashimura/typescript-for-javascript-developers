export {};

// ✳︎owner → 所有者/初期化時に設定できる/途中で変更できない/参照できる
// ✳︎secretNumber → 個人番号/初期化時に設定できる/途中で変更できる/参照できない
//getterとは、「参照を可能にする」こと
//setterとは、「変更を可能にする」こと

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  //getterとsetterは文頭に「_」（アンダースコア）をつけて改修するのが慣習
  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber:${this._secretNumber}`;
  }
}

let card = new MyNumberCard("Simuwo", 123456789);
// card.owner = "しむを";//読み込みできない（要件を満たす）
console.log(card.owner);
// card.secretNumer//読み込みできない（要件を満たす）
card.secretNumber = 111111111;
