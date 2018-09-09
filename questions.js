const inquirer = require("inquirer");
const run = require("run-func");

const askQuestions = () => {
    const questions = [
        {
            name: "FILENAME",
            type: "input",
            message: "What is the name of the file without extension?"
        },
        {
            type: "list",
            name: "EXTENSION",
            message: "What is the file extension?",
            choices: [".rb", ".js", ".php", ".css"],
            filter: function (val) {
                return val.split(".")[1];
            }
        }
    ];
    return inquirer.prompt(questions);
};

