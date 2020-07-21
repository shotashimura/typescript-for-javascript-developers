export {};

//「?」を与えた値はオプショナルとして定義される
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.72, 64);

//bmi(身長、体重、console.logで出力するかどうか？)
bmi(1.72, 64, true); //出力される
bmi(1.72, 64, false); //出力されない
bmi(1.72, 64); //出力されない
