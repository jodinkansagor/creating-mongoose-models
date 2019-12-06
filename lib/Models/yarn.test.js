const Yarn = require('./Yarn');

describe('Yarn model', () => {
  it('has a required name', () => {
    const yarn = new Yarn({
    });
    expect(yarn.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });

  it('has required weight', () => {
    const yarn = new Yarn({
      name: 'Malabrigo Worsted',      
    });
    expect(yarn.validateSync().errors.weight.message)
      .toEqual('Path `weight` is required.');
  });

  it('has required length', () => {
    const yarn = new Yarn({
      name: 'Malabrigo Worsted',      
    });
    expect(yarn.validateSync().errors.length.message)
      .toEqual('Path `length` is required.');
  });

  it('has required weight', () => {
    const yarn = new Yarn({
      name: 'Malabrigo Worsted',      
    });
    expect(yarn.validateSync().errors.unitOfMeasurementForLength.message)
      .toEqual('Path `unitOfMeasurementForLength` is required.');
  });
});
