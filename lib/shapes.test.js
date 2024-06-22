// jest tests for shapes
const Shapes = require('./shapes.js');

describe('Shapes', () => {
  test('should throw error if render() is called', () => {
    const Shapes = new Shapes();
    const err = new Error('Child class must implement a render() method.')
    expect(Shapes.render()).toThrow(err);
  });
});
