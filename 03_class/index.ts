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
let result_0 = greeting("Usman"); //block scope variable cannot be redeclared

//3- function returning some values
function greetingwithreturnValue(username:string){ // "function greeting(username: string) {:" This line defines a TypeScript function called "greeting".

     let val = `hi, ${username} this is a function`;// "let val = hi, ${username} this is a function;" Inside the greeting function, this line declares a variable named "val".

     // The "${}" syntax is used to "embed" the value of "username" into the string.

     return val;// "return val;": This line is a "return" statement. It instructs the function to return the value stored in the 'val' variable when the function is called. In this case, it returns the string created earlier with the greeting message.
 }

let greetingValues= greeting("Abdul") // "let greetingValues = greeting("Abdul");" : This line declares a variable named "greetingValues" and assigns it the result of calling the "greeting" function with the argument "Abdul". This line effectively invokes the "greeting function", passing in "Abdul" as the username "argument".

console.log(greetingValues); // "console.log(greetingValues);" line simply displays the value stored in the "greetingValues" variable to the console

//============================================================================

function sums(x: number, y: number) {//This line defines a TypeScript function named sums. 
// It declares a function with two parameters, x and y, both of which are explicitly typed as number. 
// This means the function expects two numbers as input.

     return x + y; //  indicates that the function should return a value. In this case, the function returns the result of adding "x" and "y" together.
   }

const results = sums(5, 10); //call the sums function with two numbers
console.log(results);

function sum1() { //This function does not take any parameters; it is defined without parentheses (). 
// This means it doesn't require any input values to perform its calculations.
    
     let x = 10; // is a local variable ,meaning it's only accessible within the scope of the "sum1" function.
     let y = 15;
     return x + y;
   }
// call the "sum1" function like this
const result1 = sum1();
console.log(result1);

function sum2(x: number, y: number) { // function expects "two" parameters, "x" and "y", both explicitly typed as "number". This means the function requires "two" numbers as "input".
     console.log("Sum is:", x + y); // function to print a message to the console.
   }
sum2(10, 15); // call the "sum2" function with "two numbers"

function greetings(x: string, y: string) {//function requires two strings as input.
    console.log("Greetings from PIAIC");//This is a fixed message that doesn't depend on the input parameters.
     console.log("Hello from: ", x);//followed by the value of the "x" parameter
     console.log("Hello from: ", y);//followed by the value of the "y" parameter
   }
 //call the greetings function with two strings, like this:
greetings("Abdul", "Asfar");

// Arrow fucntions
// Arrow function is similar to "lambda" in other languages

// In javascript we write the function like
// let sumX = function (x: number, y: number){
//     return x + y;
// };

let sumX = (x: number, y: number) => { //declaring a variable that will hold a function.
//This is a function expression that defines an "arrow function". 
//It takes "two parameters", 'x' and "y", both explicitly typed as "number". The arrow "=>" "separates" the function "parameters" from the function "body".
    return x + y;
  };

// call "sumX" arrow function like this:
const result2 = sumX(10, 15);
console.log(result2);

//single  //no inpt and no reutrn
let add3 = () => console.log("Here is add3 values", 5 + 15);// variable called add3 and assign it a special kind of function called an arrow function.
//This function doesn't need any information to work; it just prints a message to the console

let add4 = () => 5 + 30; //it calculates but it doesn't display anything immediately.

//call funtion by name
add3();

console.log(add4()); // use "console.log" to display what it returns.

// ================================
//arrow functions with parameters

let add5 = (num1: number, num2: number) => num1 + num2;// an arrow function, which takes two parameters, "num1" and "num2", both explicitly typed as number. 
// This arrow function calculates the sum of "num1" and "num2" and "returns the result".

add5(15, 20);// This line will calculate the sum, but the result isn't used or displayed.

console.log(add5);//It's displaying the arrow function's code, which defines how the function works, but it's not showing the result 
//  This will display the function definition, not the result of any calculation.

// to see the result, you should store it in a variable or directly log it with "console.log". For example:
let result3 = add5(15, 20);
console.log(result3); // This will display "35"

// ==========================================
//if else

var assignmentDone = true;//This line declares a variable named assignmentDone and assigns it the value true
var halfAssignment = true;//This variable is used to indicate whether a person has completed half of their assignment.

if (assignmentDone == true) {//if assignmentDone is true), the code inside the curly braces {} is executed.
  console.log("Allowed in class");
} 
else if (halfAssignment == true) {//If the previous if condition (assignmentDone) was not met, this condition is checked.
  console.log("You can also come in class ");
} 
else {//if both "assignmentDone" and "halfAssignment" are "false", the code inside this block is executed.
  console.log("You can not come to class ");
}

// ===========================================
let marks = 90;// This variable represents the student's marks
if (marks >= 90 && marks <= 100) {//This if statement checks whether the value of marks falls within the range of 90 to 100 (inclusive)
  console.log("Grade A+");
}

// 80-90 -> A
else if (marks >= 80 && marks < 90) {//checks whether marks are between 80 (inclusive) and less than 90
  console.log("Grade A");
}

//70-80 -> B
else if (marks >= 70 && marks < 80) {//checks whether marks are between 70 (inclusive) and less than 80
  console.log("Grade B");
}
//70 ->Fail
else if (marks < 70) {// checks whether marks are less than 70. If true
  console.log("Fail");
} 

else { //Finally, the else block provides a default message. If none of the conditions above are met, it logs "Invalid Input" to the console.
  console.log("Invalid Input");
}

// =================================
// Array

let fruits = ["Apple", "Banana", "Peach", "Mango"];//array holding different types of fruits.
console.log(fruits[3]) //. The "[3]" in "fruits[3]" is called an "index", and it specifies which element of the array you want to access.

//manipulating an array named "arr2" using the "pop"
let arr2 = [1, "Usman", true, "Afaq", 5];//an array that contains a mix of different types of elements, including numbers, strings, and a boolean.
console.log("Original Array is", arr2);//to print the original contents of the "arr2" array
arr2.pop();//The "pop" method removes the "last element" from the array. In this case, it removes the "5" from the "end"
console.log("New array with pop", arr2);

//array manipulation methods ("push", "shift", and "unshift")
//Push method
arr2.push(15);//add the number "15" to the end of the "arr2" array.
console.log("New array with push is: ", arr2);// displays "New array with push is:"

//shift method
arr2.shift(); //to remove the first element from the "arr2" array
console.log("New array with shift is: ", arr2);//first element ("1") is removed:

//unshift method
arr2.unshift("Zia Khan");//method to add the string "Zia Khan" to the beginning of the arr2 array.
console.log("New array with unshift is: ", arr2);

//splice method to add an element ("Ali") at a specific index (index 2) in the arr2 array
//adding new value

arr2.splice(2, 0, "Ali");//method is used to modify an array by adding, removing, or replacing elements. In this case, you're using it to add the string "Ali" at "index 2" of the "arr2" array.

// The first argument 2 is the index where you want to add the new element. In this case, it's the third position in the array because array indices are zero-based.

// The second argument 0 specifies how many elements should be removed from the array at the specified index. Since you want to add an element without removing any, you specify 0 here.

// The third argument "Ali" is the element you want to add to the array

console.log("After splice", arr2);//displays "After splice"


//replacing existing values
arr2.splice(2, 1, "Ali");// method is used to modify an array. In this case, you're using it to replace an element at "index 2" of the "arr2" array.
// The first argument "2" is the index where you want to perform the replacement. In this case, it's the third position in the array because array indices are zero-based.
// The second argument "1" specifies how many elements should be removed from the array at the specified index. You want to remove one element for replacement, so you specify "1".
// The third argument "Ali" is the element you want to insert at the specified index as a replacement.
console.log("After splice", arr2);

//replacing existing values
//replace one element at a specific index (index 2) in the arr2 array with multiple elements ("Ali," "Ahmed," and "Hamza").

arr2.splice(2, 1, "Ali", "Ahmed", "Hamza");//The first argument "2" is the index where you want to perform the replacement. In this case, it's the third position in the array because array indices are zero-based.
// The second argument "1" specifies how many elements should be removed from the array at the specified index. You want to remove one element for replacement, so you specify 1.
// The third, fourth, and fifth arguments are the elements you want to insert at the specified index as replacements: "Ali," "Ahmed," and "Hamza."

console.log("After splice", arr2);

