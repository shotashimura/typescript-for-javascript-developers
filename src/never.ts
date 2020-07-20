export {};

//関数の中で例外処理をするときは、never型を指定
//呼び元に戻ってこないという意味
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

//void型はreturnする値がないことを意味する
//never型はそもそも値が戻らないことを意味する
let foo: void = undefined;
//errorだけ代入可能
let bar: never = error("only me");
