export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name:"Simuwo;underTwenty: false };

//How to write index signatures
//{{index : typeForIndex} : typeFprValue}
profile.name = "Simuwo";
profile.age = 43;
profile.nationality = "Japan";
