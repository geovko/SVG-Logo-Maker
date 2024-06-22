const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    render() {
        let output = `<rect width="150" height="150" x="75" y="30" fill="${this.color}" />`;
        if (this.text != ``) {
            output += `<text text-anchor="middle" fill="${this.textColor}" font-size="45px" stroke-width="1px" x="150px" y="125px"> ${this.text} </text>`;
        }
        return output;
    }
}

module.exports = Square;