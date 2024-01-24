const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Square, Triangle } = require("./lib/shapes");
const { Svg } = require("./lib/svg")

const questions = [
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to (3) characters",
        validate: function (input) {
            if (input.trim() === "") {
                return "Must enter at least (1) character";
            }
            if (input.length > 3) {
                return "Cmon mane";
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
                return "Must choose a color!";
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
        message: "What shape would you like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];
//write the data to the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Shes a beaut!");
    });
}

// TODO: Create a function to initialize app
async function init() {
    console.log("And away we go!");

    var svgString = "";
    var svg_file = "logo.svg";

    // prompt user for answers
    const answers = await inquirer.prompt(questions);

    var flynnText = "";

    if (answers.text.length > 0 && answers.text.length < 4) {

        flynnText = answers.text;

    }
    else {
        console.log("You didnt enter the correct number of characters!");

        return;
    }

    let flynnShape;

    if (flynnShape === "Square") {
        flynnShape = new Square();
    }
    else if (flynnShape === "Trinagle") {
        flynnShape = new Triangle();
    }
    else if (flynnShape === "Circle") {
        flynnShape = new Circle();
    }
    else {
        console.log('must pick a shape')
    }
    flynnShape.setColor




    // writeToFile("./examples", answers);
}

init();
