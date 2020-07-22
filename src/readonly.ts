export {};

//readonly → 読み取り専用で変更不可

class VisaCard {
  //readonly修飾子
  // readonly owner: string;

  //constractorの引数内でreadonlyの指定も可能
  //publicの省略も可能
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

let myCard = new VisaCard("simuwo");
console.log(myCard.owner); //simuwo
// myCard.owner = "しむを"; //cant assign... 変更不可能(readonly修飾子のため)
