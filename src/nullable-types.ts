export {};

//strictFalseCheckでnullの設定を許可すると、
//値にnullを設定してもエラーが出なくなる
// let profile: { name: string; age: number  } = {
//   name: "Simuwo",
//   age: null,
// };
// profile = null;

//一般的にはtrueにしてnullを代入できないようにして、運用する

//nullableな型
// nullを入れたい値をunionタイプにする
let profile: { name: string; age: number | null } = {
  name: "Simuwo",
  age: null,
};
