const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    render() {
        let output = `<circle r="85" cx="150" cy="110" fill="${this.color}" />`;
        if (this.text != `` && this.text != null) {
            output += `<text text-anchor="middle" fill="${this.textColor}" font-size="60px" stroke-width="1px" x="150px" y="130px"> ${this.text} </text>`;
        }
        return output;
    }
}

module.exports = Circle;