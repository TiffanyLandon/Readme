// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'Input',
                name: 'title',
                Message: 'What is the title of the project?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('What is the title of the project?');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmDescription',
                message: 'Would you like to provide a short description explaining the what, why, and how of your project?.',
                default: true,
            },
            {
                type: 'Input',
                name: 'confirmDescription',
                message: 'Provide a short description explaining the what, why, and how of your project.',
                when: ({ confirmDescription }) => confirmDescription
            },
            {
                type: 'Input',
                name: 'installationUsage',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.');
                        return false;
                    }
                }
            },
            {
                type: 'Input',
                name: 'usageInfo',
                message: 'Provide instructions and examples for use. Include screenshots as needed.',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Provide instructions and examples for use. Include screenshots as needed.');
                        return false;
                    }
                }
            },
            {
                type: 'Input',
                name: 'contribution',
                message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so');
                        return false;
                    }
                }
            },
            {
                type: 'Input',
                name: 'Test',
                message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Go the extra mile and write tests for your application. Then provide examples on how to run them here.');
                        return false
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license does the project consit of?',
                choices: ["MIT", "IPL 1.0", "ISC", "MPL 2.0"]
            },
            {
                type: 'Input',
                name: 'githubUsername',
                message: 'Please provide your github username',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Provide your github username');
                        return false
                    }
                }
            },
            {
                type: 'Input',
                name: 'email',
                message: 'Please provide a email address',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Provide a email address');
                        return false;
                    }
                }
            }

        ])
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
init = () => {
    return questions()
        .then(userData => {
            return generateMarkdown(userData)
        })
        .then(markdown => {
            return writeToFile('./dist/readme.md', markdown)
        })
};

// Function call to initialize app
init();
