export {};

//tuple型
// 型の順番に制約を持たせたい時に利用
let profile: [string, number] = ["hey", 20];
// 型の順番が決まっているので、[20,"hey"];はエラーになる
//型推論では表示されないので注意
