export {};

//冒頭にexportがない、即ちmodule化をしていないと
//通常のJSはエラーになる
let name = "typescript";

//JavaScriptに対して、型をつけることができるのがTypeScript
let isFinished: boolean = true;
isFinished = false;
//代入不可
// isFinished = 1;
console.log({ isFinished });
