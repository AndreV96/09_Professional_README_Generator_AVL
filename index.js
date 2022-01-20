// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs");
// Ask user questions: title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// Receive information from the questions and put it in the function generateMarkdown in a template literal

// Put the information from generateMarkdown in a new README file and then choose the location of the file.

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
},{
    type: "input",
    name: "email",
    message: "What is your email address?"
},{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
}, {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project"
}, {
    type: "list",
    name: "license",
    message: "Choose a license for your project",
    choices: ["MIT", "GNU", "APACHE"]
}, {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running"
}, {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?"
}, {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use of your project"
}, {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./dist/${fileName}`, data)
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const response = await inquirer.prompt(questions)
        const readmeData = generateMarkdown(response)
        writeToFile("README.md", readmeData)
    } catch (err) {
        console.log(err)
    }
}

// Function call to initialize app
init();
