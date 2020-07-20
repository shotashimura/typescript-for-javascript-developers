export {};

//「日」しか指定できないように設定することも可能
// let dayOfTheWeek: "日" = "日";

//union型と組み合わせる（日〜土しか入らない）
let dayOfTheWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";
dayOfTheWeek = "月";

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;

//falseが設定できない
let TRUE: true = true;
