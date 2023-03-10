 /**
 * const let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数は再宣言不可能"

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: "28",
// }

// val4.name = "吉川";
// val4.address = "神戸"
// console.log(val4.name);
// console.log(val4.address);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];

// val5[0] = "tora";
// console.log(val5);

/**
 * テンプレート文字列
 */

const name = "吉川";
const age = 28;
// 私の名前はじゃけぇです。年齢は28歳です。

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
