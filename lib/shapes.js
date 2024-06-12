// Exports 'Triangle', 'circle', and 'Square' Classes
class Shapes {
    constructor(color, text, textColor) {
        if (text.length > 3) {
            throw new Error('The text cannot contain more than 3 characters.');
        }
        
        if (!color) {
            throw new Error(`This is not a valid color: "${color}"`);
        }

        if (!textColor) {
            throw new Error(`This is not a valid color: "${textColor}"`);
        }

        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
      
    }
}

module.exports = Shapes;