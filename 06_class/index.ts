import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

// Banner
figlet('Student Registration', (err, data) => {
    if (err) {
        console.log('Something went wrong with the banner...');
        return;
    }
    console.log(chalk.blue(data));

    // Inquirer prompts
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter your first name:',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter your last name:',
        },
        {
            type: 'input',
            name: 'age',
            message: 'Enter your age:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ])
    .then((answers: Record<string, string>) => {
        // Display information using Chalk
        console.log(chalk.green('\nStudent Information:'));
        console.log(chalk.green(`Name: ${answers.firstName} ${answers.lastName}`));
        console.log(chalk.green(`Age: ${answers.age}`));
        console.log(chalk.green(`Email: ${answers.email}`));
    });
});
