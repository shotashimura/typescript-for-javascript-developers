export {};
//関数の戻り値に対する型指定が出来る
function returnNoting(): void {
  console.log("I don't return anything");
  //undefiendを型に指定する場合は、「return undefiend」とする
  //return undefiend;
}
console.log(returnNoting);
