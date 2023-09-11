console.log("abdul qadir"); // it will log the string "Abdul Qadir" to the console.
// variable creation
let myName = "Abdul Qadir"; // myName is variable name
// let, const and var is used in variable creation
const myCity ="ISB";
// "let" and "const" are block scope
// "block" is "{}" curly braces we cannot access or modify the block from outside
// "scope" is between the "braces"
// variable initialize with "let" can be 'change'
// "const" cannot be "changed"
// "var" is a "global scope"
var age ="25"
if(true){
    let myname="abdul";
    myname= 'abdul qadir' // let can be changed or updated

    const age= 24 
    age ="25" // const cannot be changed
}
console.log(myname) //cannot access from the block to outside

let para= "hi, there my name is ,"+myName+"and I belong to a wonderfull place on the face of earth that is popular for its beauty \n" // concatenation using +myName+
console.log(para); 
// for number contatenation
let num1 = 12;
let num2 = 40;
let result = num1+num2; //concatenation
console.log("the result of  addition is " + result);
//for string concatenation
let var1 = "abdul";
let var2 ="qadir";
let result2 = var1+var2; // concatenation
console.log(result2);
//arithmetical operators
num2 += 5 //OR num2 = num2 +5 (Add)
num1 -= 5 //OR num1 = num1 -5   (Subtract)
//comparison operators
let num=20
let num3=20
console.log(num==num3) // to check value // loose equality operator "(==)" 
console.log(num===num3) // to check same value and the same data type // strict equality operator "(===)"
let num4=23
let num5=20
console.log(num4!=num5) // not equal to number
//logical operators
// AND operator as &&
// OR operator as ||
// NOT operator as !
console.log(!(num4>num5)); // not converts true to false and vise versa