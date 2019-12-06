const Tree = require('./Tree');

describe('Tree model', () => {
  it.skip('has a required name', () => {
    const tree = new Tree({

    });
    expect(tree.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });

  it.skip('has a boolean value at confifer', () => {
    const tree = new Tree({
      name: 'Doug Fir',
      conifer: 5      
    });
    expect(tree.validateSync().errors.conifer.message)
      .toEqual('Cast to Boolean failed for value "5" at path "conifer"');
  });

  it.skip('has a required average height number', () => {
    const tree = new Tree({
      name: 'Doug Fir'
    });
    expect(tree.validateSync().errors.averageHeight.message)
      .toEqual('Path `averageHeight` is required.');
  });
});
