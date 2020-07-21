export {};

//シグネチャーの定義
function double(value: number): number;
function double(value: string): string;

//実体の関数
//union形ではなく、any型で実装。データの受け付けと型制約はシグネチャーで定義
function double(value: any): any {
  if (typeof value === "number") {
    return value * 2;
  } else {
    //シグネチャーで型制約しているため、string型しかありえない
    return value + value;
  }
}

//関数の名前が重複した時にoverloadを使う
// function double(value: number): number {
//   return value * 2;
// }
// function double(value: string): string {
//   return value + value;
// }

console.log(double(100)); //200
console.log(double("Go　")); //GoGo
// console.log(double(true));//コンパイルエラー。シグネチャーで型制約しているため。
