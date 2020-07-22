export {};

let name = "Atsushi";
name = "John";
//as const を使って変数を初期化、定数のように使える
let nickname = "John" as const;
// nickname = "Lennon";//エラーが出る。既にJohn型で定義されているから
// nickname = "John";//こっちはOK

let profile = {
  name: "Atsushi",
  height: 178,
} as const; //as constを加えると値がreadonlyになる
//よって下記にエラーが出現
// profile.name = "Atsushi";
// prifile.height = 180;
