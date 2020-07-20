export {};

type ObjectType = {
  name: string;
  age: number;
};
interface ObjectInterface {
  name: string;
  age: number;
}

//どちらでも可能
// let object: ObjectType = {
//   name: "simuwo",
//   age: 26,
// };

let object: ObjectInterface = {
  name: "simuwo",
  age: 26,
};
