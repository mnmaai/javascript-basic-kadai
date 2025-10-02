// 変数の宣言
let userName;

// 値の代入
userName = '体重';

// 変数の宣言・値の代入
let userNumber = 68;

// 変数の宣言
let userNam;

// 値の代入
userNam = '身長';

// 変数の宣言・値の代入
let userNumbe = 1.7;

// 四則演算（BMIの計算）
let bmi = userNumber / (userNumbe * userNumbe);

// 結果の出力
console.log(userName + '：' + userNumber + 'kg');
console.log(userNam + '：' + userNumbe + 'm');
console.log('BMI：' + bmi.toFixed(2));