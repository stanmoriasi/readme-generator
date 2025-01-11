// TODO: Include packages needed for this application
import inquirer from "inquirer";   
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// Ensure the generateMarkdown function is correctly defined in the imported file

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose the licence type',
        name: 'license',
        choices: ['GPLv2','AGPL','LGPL','MPL','Apache','MIT','Unlicensed']
    },
    {
        type: 'input',
        message: 'Provide your github username link',
        name: 'username',
    },
 ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log(`\nSuccess! ${fileName} has been created`);
    } catch (err) {
        console.error(err);
    }
}

// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then((response) => {
    const markdown = generateMarkdown(response);
    writeToFile('README.md', markdown);
    });

}

// Function call to initialize app
init();
