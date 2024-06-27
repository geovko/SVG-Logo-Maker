// jest tests for shapes
const Shapes = require('./shapes.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

describe('Shapes', () => {
  describe('Render', () => {
    it('should throw error if render() fails', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  describe('Text Limit', () => {
    it('should throw an error if the text contains more than 3 characters', () => {
      const shape = () => new Shapes('red', 'haha', 'white');
      const err = new Error('The text cannot contain more than 3 characters.');

      expect(shape).toThrow(err);
    });
  });
});