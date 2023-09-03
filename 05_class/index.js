// const promptSync = require('prompt-sync');
// import sum from "./first_module.js";
// sum();
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    // prompt is a function with parameters list[] and list of objects{}
    // objects are the no of questions that user has answer
    // await is used for async function
    // async is a parrallel programing
    {
        name: "userName",
        type: "input",
        message: "Please enter your username"
    },
    {
        name: "contactNumber",
        type: "number",
        message: "Please enter contact number"
    },
    {
        name: "gender",
        type: "checkbox",
        message: "Please enter gender",
        choices: ["male", "female"],
    },
    {
        name: "userAge",
        type: "number",
        message: "Please enter user age",
        validate: function (userAge) {
            if (userAge < 20) {
                return "userAge must be greater than 20";
            }
            else {
                return true;
            }
        }
    }
]);
console.log(answers);
console.log(answers.userName); // acess using await Promise
