const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to (3) characters",
        validate: function (input) {
            if (input.trim() === "") {
                return "Must enter at least (1) character";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "textColor",
        message: "Text-Color: Enter a color keyword (OR a hexadecimal number)",
        validate: function (input) {
            if (input.trim() === "") {
                return "Must enter a porject description!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Shape-Color: Enter a color keyword (OR a hexadecimal number)",
    },
    {
        type: "list",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
    //write the file
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Good on ya mate, you generated a logo!");
    });
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);

    writeToFile("./examples", answers);
}

init();
