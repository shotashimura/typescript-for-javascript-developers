export {};

//引数のrateにデフォルト引数を指定
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

//第二引数があるので、デフォルト引数は適応されない
console.log(nextYearSalary(1000, 1.05));
//デフォルト引数が第二引数になる
console.log(nextYearSalary(1000));
