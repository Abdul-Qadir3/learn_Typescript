"use strict";
//object: everything which has some properties and which has some function is called an object
//Array is an object because it has properties(like lenght and without round brackets) and functions/methods(like push,pop,slice,fill etc like lenght and with round brackets())
let tempArray = []; //default type never
let cnic = []; //type number
let names = []; //type string
let mixArray = ["abdul", 23, true]; //we can add number , string and boolean in one array
let mixArray0 = ["abdul", "hello"]; //we cannot add number , string and boolean in one array at a time
mixArray0.push("world");
console.log(mixArray0);
mixArray0.length;
mixArray0.reverse();
console.log(mixArray0);
mixArray0.reverse().reverse().reverse().reverse().reverse().reverse().reverse();
console.log(mixArray0);
console.log(mixArray0.length);
let array2 = [12, 34, 56, 78, 99, 77, 44, 33, 22, 11];
//array copy
let copyArray = array2.slice();
console.log(array2);
copyArray = array2.copyWithin(0, 0); //contains three parameter target , start and end
console.log(array2);
copyArray = array2.copyWithin(-1, 0);
console.log(copyArray);
copyArray = array2.copyWithin(1, 0);
console.log(copyArray);
