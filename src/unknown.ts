export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnkown: unknown = kansu();

//any型のリスク、実行するまでエラーに気がつかない
let subAny = numberAny + 10;

//型を認識
// console.log(typeof numberUnkown); //number
//そのままだとコンパイルエラーが発生
//if文で型をcheckすることで（タイプガードという）、コンパイルエラーが出ない
if (typeof numberUnkown === "number") {
  let subUnknown = numberUnkown + 10;
}
