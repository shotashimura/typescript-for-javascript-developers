export {};

let name: any = "simuwo";
//型アサーション、number型として利用できる
//asと＜＞の両方使えるが、asが推奨されている
// let length: number = name.length as number;
// let length: number = (name as string).length;
let length: number = (<string>name).length;
length = "foo";
