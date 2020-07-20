export {};

type Pithcer1 = {
  throwingSpeed: number;
};

type Batter1 = {
  batingAverage: number;
};

const Sasaki: Pithcer1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  batingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   batingAverage: number;
// };

//intersection型とは既存の型を利用して、新しい型を作る
//直感的で分かりやすい！！
type TwoWayPlayer = Pithcer1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  batingAverage: 0.286,
};
