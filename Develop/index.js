// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    message:'Project Name:',
    name: 'projectName',
    type: 'input'
},{
    message:'Project Description:',
    name: 'projectDescription',
    type: 'input'
},{
    message:'Project Usage:',
    name: 'projectUsage',
    type: 'input'
},{
    message:'Project Installation:',
    name: 'projectInstallation',
    type: 'input'
},{
    message:'License:',
    name: 'projectLicense',
    type: 'list',
    choices: ['None','MIT', 'Apache', 'Boost', 'Bash','Mozilla']
},{
    message:'Github Account:',
    name:'github',
    type:'input'
}
];

    let fileName = 'readme01.md'
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    md = markdown(data);
        fs.writeFile(fileName, md, (error) => {
            error ? console.error(error) : console.log('readme created');
        });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(fileName, data);
    }).catch((error) => {
          console.error(error.message);
        }
    )
};     

// Function call to initialize app
init();
