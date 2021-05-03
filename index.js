// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
const username = require("./utils/api");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your Github username: ",
        
    },
    {
        type: "input",
        name: "title",
        message: "Enter your project title: ",
        
    },
    {
        type: "input",
        name: "description",
        message: "Enter a short project description: ",
        
    },
    {
        type: "input",
        name: "installation",
        message: "Explain how user would install (if necessary) for Installation Section. ",
        
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage of the project: ",
        

    },
    {
        type: "list",
        name: "license",
        message: "Enter licenses used for the project: ",
        choices: ["MIT",
        "GNU GPL",
        "Apache 2.0",
        "Boost Software License 1.0",
        "Mozilla",
        "Open Software License 3.0",
        "None",],
        
    },
    {
        type: "input",
        name: "contribute",
        message: "Explain how users can contribute to your project (if necessary) ",
        

    }, {
        type: "input",
        name: "tests",
        message: "Provide tests for project, and explain how to test (if necessary) ",
        
    }, {
        type: "input",
        name: "userEmail",
        message: "Please enter your email "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, function (err) {
       err
          ? console.log(err)
          : console.log('Your README file was created')
         });
        }



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(`Generating README.md with ${data.title}`);
        writeToFile('./example/README.md' , generateMarkdown(data));
    });
}

// Function call to initialize app
init();
