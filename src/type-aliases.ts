export {};

//型に対して名前をつけてやる
type Strings = string;

const fooString: string = "hello";
const booString: Strings = "hello";

type Profile = {
  name: string;
  age: number;
};

const example1 = {
  name: "simuwo",
  age: 26,
};

const example2: Profile = {
  name: "simuwo",
  age: 433,
};

type Profile2 = typeof example1;
