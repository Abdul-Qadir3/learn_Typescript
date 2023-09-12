const promptSync = require('prompt-sync')();// "const promptSync': This line declares a constant variable named "promptSync"

// "require('prompt-sync')": This part of the line is using Node.js's "require" function to import the 'prompt-sync' library/module. This library allows you to synchronously (blocking) read input from the user in the command line.

// "():" Immediately after importing 'prompt-sync', you are calling it as a function by including "()" at the end. This call initializes and returns a function that you can use to collect "user input". So, above line is setting up the 'prompt-sync' library for use in your code.

const nameName = promptSync('Enter your name: ');// "const nameName:" Here, you declare another constant variable named "nameName". This variable will be used to store the user's input.

// "promptSync('Enter your name: '):" You use the "promptSync" function you initialized earlier to display the message "Enter your name: " to the user and wait for the user to input their name. The "input" is stored in the "nameName" variable.

console.log(`Hello,! `, nameName);// "console.log():" This line uses the console.log function to "print a message" to the console.

// "Hello, ${nameName}!:" This is a "template literal (a string enclosed in backticks ` `)" that allows you to "embed" the value of the nameName variable into the string using "${}". This way, you can create a "dynamic message" that includes the user's input.

// Functions
//types
// 1- no input no return
// 2- pass input but no return
// 3- pass input and return output

//1.	no input no return

function printMessage(){ //"function printMessage() {:" This line declares a TypeScript function named "printMessage".
// The function keyword is used to define functions in TypeScript.

    //body of the function
    console.log("hi, this is class three of typescript");
}
printMessage(); // "printMessage();:" This line calls (invokes) the "printMessage function". When this line is executed, it triggers the code inside the "printMessage function to run."

//2- pass input but no returns
function greeting(userName: string) {
    console.log(`Hi, ${userName} this is greeting funciton`);
}
// let result = greeting("Usman"); //block scope variable cannot be redeclared

//3- function returning some values
function greetingwithreturnValue(username:string){ // "function greeting(username: string) {:" This line defines a TypeScript function called "greeting".

    let val = `hi, ${username} this is a function`;// "let val = hi, ${username} this is a function;" Inside the greeting function, this line declares a variable named "val".

    // The "${}" syntax is used to "embed" the value of "username" into the string.

    return val;// "return val;": This line is a "return" statement. It instructs the function to return the value stored in the 'val' variable when the function is called. In this case, it returns the string created earlier with the greeting message.
}

let greetingValues= greeting("Abdul") // "let greetingValues = greeting("Abdul");" : This line declares a variable named "greetingValues" and assigns it the result of calling the "greeting" function with the argument "Abdul". This line effectively invokes the "greeting function", passing in "Abdul" as the username "argument".

console.log(greetingValues); // "console.log(greetingValues);" line simply displays the value stored in the "greetingValues" variable to the console