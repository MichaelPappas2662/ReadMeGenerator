// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: "input",
        name: "licenses",
        message: "Enter licenses used for the project: "
        
    },
    {
        type: "input",
        name: "contribute",
        message: "Explain how users can contribute to your project (if necessary) ",
        

    }, {
        type: "input",
        name: "tests",
        message: "Provide tests for project, and explain how to test (if necessary) ",
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
