// 正の整数を代入
let num = 15;

// 3と5の倍数の判定
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
}

// 3の倍数の判定
else if (num % 3 === 0) {
  console.log("3の倍数です");
}

// 5の倍数の判定
else if (num % 5 === 0) {
  console.log("5の倍数です");
}

// それ以外
else {
  console.log(num);
}
