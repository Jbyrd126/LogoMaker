const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");
//const { Svg } = require("./lib/svg");


// module.export = { Svg }
class Svg {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

//Questions array
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
    fs.writeFile(fileName, data, 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Shes a beaut!");
    });
}

//  function to initialize app
async function init() {
    console.log("We fight for the user!");

    var svgString = "";
    var svg_file = "flynn.svg";

    // prompt user for answers
    const answers = await inquirer.prompt(questions);

    var flynnText = "";

    if (answers.text.length > 0 && answers.text.length < 4) {
        flynnText = answers.text;
    } else {
        console.log("You didnt enter the correct number of characters!");

        return;
    }

    //user font color
    let flynnTextColor = answers["textColor"];

    //user shape color
    let flynnShapeColor = answers.shapeColor;

    //user shape type
    let flynnShapeType = answers["shape"];

    let flynnShape;

    if (flynnShapeType === "Square") {
        flynnShape = new Square();
        console.log("Flynn has selected Square!");
    } else if (flynnShapeType === "Triangle") {
        flynnShape = new Triangle();
        console.log("Flynn has selected Triangle!");
    } else if (flynnShapeType === "Circle") {
        flynnShape = new Circle();
        console.log("Flynn has selected Circle!");
    } else {
        console.log("You must pick a shape");
    }
    flynnShape.setColor(flynnShapeColor);

    var svg = new Svg();

    svg.setTextElement(flynnText, flynnTextColor);
    svg.setShapeElement(flynnShape);
    svgString = svg.render();



    console.log(svgString);
    writeToFile("./output/flynn.svg", svgString);
}

init();
