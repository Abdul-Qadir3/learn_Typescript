let user:any={name: "abdul qadir", age: 10} 
// Variables declared with let can be reassigned later.
// { name: "abdul qadir", age: 10 }: This is an object literal enclosed in curly braces {}. It defines an object with two properties: name: The property name is assigned the string value "abdul qadir". age: The property age is assigned the numeric value 10.
// name: The property name is assigned the string value "abdul qadir".
// age: The property age is assigned the numeric value 10
//  the variable user holds an object with `name` and `age` properties.

// Template Litrals
let myString= "Mystring"
//with back ticks and a dollar sign($) with curly braces and the variable name in the curly braces
console.log(`Value of string ${myString}\n `)// used instead of concate 

let univerDepart:string; // variable with camel case //type annotation
const age2 = 25; // type infer //"const" keyword is used to declare variables that cannot be reassigned after their initial value is set

var address ="ISB"; // the var keyword is used to declare variables that have function scope or global scope, depending on where they are declared
// Unlike const, variables declared with var can be reassigned.
const userName ="abdul";

function fname(){
    console.log(userName)
}
console.log("Abdul Qadir"); // code doesn't directly use the user object that was defined earlier.
// it will log the string "Abdul Qadir" to the console.
// to log the name property of the user object, you should modify the console.log() line like this:
console.log(user.name);