const Skater = require('./Skater');

describe('Skater model', () => {
  it.skip('has a required name', () => {
    const skater = new Skater({

    });
    expect(skater.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });

  it.skip('has a required team value', () => {
    const skater = new Skater({
      name: 'JBJ'
    });
    expect(skater.validateSync().errors.team.message)
      .toEqual('Path `team` is required.');
  });

  it.skip('has a required skater number', () => {
    const skater = new Skater({
      name: 'JBJ'
    });
    expect(skater.validateSync().errors.skaterNumber.message)
      .toEqual('Path `skaterNumber` is required.');
  });

  it.skip('has a required skater number above 0', () => {
    const skater = new Skater({
      name: 'JBJ',
      skaterNumber: -1
    });
    expect(skater.validateSync().errors.skaterNumber.message)
      .toEqual('Path `skaterNumber` (-1) is less than minimum allowed value (0).');
  });

  it.skip('has a required skater number below 10000', () => {
    const skater = new Skater({
      name: 'JBJ',
      skaterNumber: 10001
    });
    expect(skater.validateSync().errors.skaterNumber.message)
      .toEqual('Path `skaterNumber` (10001) is more than maximum allowed value (9999).');
  });
});

