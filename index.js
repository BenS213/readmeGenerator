// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

//  TITLE
    {
        type:'input',
        message:'What is the project title?',
        name:'title',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a title');
                return false;
            }
        }
    },
// DESCRIPTION
    {
        type:'input',
        message:'What is the project description?',
        name:'description',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
// INSTALLATION INSTRUCTIONS
    {
        type:'input',
        message:'What are the installation instructions?',
        name:'installationInstructions',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter installation instructions');
                return false;
            }
        }
    },
// USAGE INFORMATION
    {
        type:'input',
        message:'What is the usage information?',
        name:'usageInformation',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter usage information');
                return false;
            }
        }
    },
// CONTRIBUTION GUIDELINES
    {
        type:'input',
        message:'What are the contribution guidelines?',
        name:'contributionGuidelines',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
// TEST INSTRUCTIONS
    {
        type:'input',
        message:'What are the test instructions?',
        name:'testInstructions',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter test instructions');
                return false;
            }
        }
    },
// LICENSE
    {
        type:'list',
        message:'What is the license?',
        name:'license',
        choices:['MIT', 'Apache 2.0', 'GPL v3.0', 'None'],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please select a license');
                return false;
            }
        }
    },
// GITHUB USERNAME
    {
        type:'input',
        message:'What is your Github username?',
        name:'githubUsername',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your Github username');
                return false;
            }
        }
    },
// EMAIL
    {
        type:'input',
        message:'What is your email address?',
        name:'email',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    }
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            return console.log(err);
        } else {
        console.log('SUCCESS!')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then(function(input) {
        writeToFile('README.md', generateMarkdown(input));
    })
}

// Function call to initialize app
init();
