// Exports 'Triangle', 'circle', and 'Square' Classes
class Shapes {
    constructor(color, text, textColor) {
        if (text != '' && text != null && text.length > 3) {
            throw new Error('The text cannot contain more than 3 characters.');
        }

        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        return this.color = color;
    }
}

module.exports = Shapes;