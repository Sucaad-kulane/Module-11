const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        Type: `input`,
        name: `github`,
        message: `What is your GitHub username ?`
    },
    {
        Type: `input`,
        name: `email`,
        message: `What is your email address ?`
    },
    {
        Type: `input`,
        name: `Title`,
        message: `What is your Project name?`
    },
    {
        Type: `input`,
        name: `description`,
        message: `Can you inform the description of your project?`
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license?',
        choices: ['MIT', 'APACHE 2.0', 'GPL', 'None']
    },
    
    {
        Type: `input`,
        name: `installation`,
        message:`What command should be run to install dependencies`,
        default:`npm i`
    },
    {
        Type: `input`,
        name: `test`,
        message:`What command should be run to run test`,
        default:`npm test`
    },
    {
        Type: `input`,
        name: `usage`,
        message:`What does the user need to know about using the repo`,
        
    },
    {
        Type: `input`,
        name: `contributing`,
        message:`What does the user need to know about contributing to the repo?`,
       
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) =>{
        console.log(`Generating README...`);
        writeToFile(`README.md`, generateMarkdown({...response}))
    })

}

// function call to initialize program
init();
