const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    render() {
        let output = `<polygon points ="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        if (this.text != ``) {
            output += `<text text-anchor="middle" fill="${this.textColor}" font-size="45px" stroke-width="1px" x="150px" y="135px"> ${this.text} </text>`;
        }
        return output;
    }
}

module.exports = Triangle;