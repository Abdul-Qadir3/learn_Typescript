"use strict";
// let myname = 5555;
// if(typeof myname == "string"){
//     myname.length;
// }
// console.log((myname as unknown as string).length);
// console.log(typeof myname);
// let num = '15';
// num.length;
// console.log((<string> myname).length)
// let myname = 5555;
// let newValue = myname.toString(); // "5555"  // type converstion
// console.log(typeof newValue);
// console.log(typeof myname)
// let name1 : unknown =  54655;
// name1.toString()
//==================================
// ENUM
// enum Color {
//   Red,
//   Green,
//   Blue,
// } //starts with 0
// var c: Color = Color.Green;
//0  1      2
var matchResult;
(function (matchResult) {
    matchResult["win2"] = "win";
    matchResult["lose"] = "lose";
    matchResult["draw"] = "draw";
})(matchResult || (matchResult = {}));
let indScore = 200;
let pakScore = 201;
if (pakScore > indScore) {
    console.log(`Pakistan ${matchResult["win"]}`);
}
else if (indScore > pakScore) {
    console.log(`Pakistan ${matchResult.lose}`);
}
else {
    console.log("Match" + matchResult.draw);
}
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName = Color1[2];
// console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {})); //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
Color1[1];
;
// Color[1]
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
    Color2[Color2["purple"] = 2] = "purple";
    Color2[Color2["skyBlue"] = 3] = "skyBlue";
})(Color2 || (Color2 = {}));
console.log("indexes of Color2 ", Color2[3]);
