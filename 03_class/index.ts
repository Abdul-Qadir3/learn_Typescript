const promptSync = require('prompt-sync')();

const nameName = promptSync('Enter your name: ');

console.log(`Hello,! `, nameName);

//1.	no input no return

function printMessage(){
    //body of the function
    console.log("hi, this is class three of typescript");
}
printMessage();

//2.	pass input but no returns
function greeting(username:string){
    let val = `hi, ${username} this is a function`;
    return val;
}
let greetingValues= greeting("Abdul")

console.log(greetingValues);

