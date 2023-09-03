var promptSync = require('prompt-sync')();
var nameName = promptSync('Enter your name: ');
console.log("Hello,! ", nameName);
//1.	no input no return
function printMessage() {
    //body of the function
    console.log("hi, this is class three of typescript");
}
printMessage();
//2.	pass input but no returns
function greeting(username) {
    var val = "hi, ".concat(username, " this is a function");
    return val;
}
var greetingValues = greeting("Abdul");
console.log(greetingValues);
