// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs");

const questions = [{
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    default: "AndreV96"
},{
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "ventaslederer@hotmail.com"
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
    choices: ["MIT", "APACHE 2.0", "GPL v3", "EPL 1.0", "None"]
}, {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running",
    default: "npm i"
}, {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test"
}, {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use of your project"
}, {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
},];

function writeToFile(fileName, data) {
    fs.writeFileSync(`./dist/${fileName}`, data)
}

async function init() {
    try {
        const response = await inquirer.prompt(questions)
        const readmeData = generateMarkdown(response)
        writeToFile("README.md", readmeData)
    } catch (err) {
        console.log(err)
    }
}

init();
