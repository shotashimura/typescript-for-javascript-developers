import axios from "axios";

export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";
axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  // 型の中身が分からない時
  //極力使わないように努力すること
  // let data :any = response.data;
  // objectだと知っている時
  // let data: object[] = response.data;
  // interfaceを利用して正確な型を指定
  let data: Article[] = response.data;
  console.log(data);
});
