import inquirer from "inquirer";
import chalk from 'chalk';
let answer = await inquirer.prompt([
    {
        name: "firstName",
        type: "string",
        message: "enter first name",
    },
    {
        name: "lastName",
        type: "string",
        message: "enter last name",
    },
    {
        name: "email",
        type: "string",
        Message: "Enter email address",
    },
    {
        name: "phoneNumber",
        type: "number",
        message: "Enter phone number",
    },
    {
        name: "gender",
        type: "checkbox",
        message: "Enter gender",
        choices: ["male", "female"],
    },
    {
        name: "hobbies",
        type: "checkbox",
        message: "select your hobby",
        choices: ["football", "cricket", "badmintan", "volleyball"],
    }
]);
console.log(chalk.bgHex(answer.firstName));
console.log(chalk.bgGreen(answer.lastName));
console.log(chalk.bgGray(answer.gender));
console.log(chalk.bgBlueBright(answer.email));
console.log(chalk.bgCyan(answer.hobbies));
