// Runs the application using imports from lib/
const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'what text did you want to include in the logo? (3 characters max.)',
        },
        {
            type: 'input',
            message: 'Please enter a color for the text.',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape will you use?',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            message: 'Please enter a color for the shape.',
            name: 'color',
        },
    ])
    .then((data) => {
        let aShape;

        if (data.shape == 'Circle') {
            aShape = new Circle(data.color, data.text, data.textColor);
        } else if (data.shape == 'Triangle') {
            aShape = new Triangle(data.color, data.text, data.textColor);
        } else {
            aShape = new Square(data.color, data.text, data.textColor);
        }

        const newFile = `<!DOCTYPE html><html><body><svg width="300" height="500" xmlns="http://www.w3.org/2000/svg">${aShape.render()}</svg><body></html>`

        fs.writeFile('./util/logo.svg', newFile, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
        