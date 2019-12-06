const Mountain = require('./Mountain');

describe('Mountain model', () => {
  it.skip('has a required name', () => {
    const mountain = new Mountain({
    });
    expect(mountain.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });

  it.skip('has a required heightAtPeakInFeet value', () => {
    const mountain = new Mountain({
      name: 'Mt Hood'
    });
    expect(mountain.validateSync().errors.heightAtPeakInFeet.message)
      .toEqual('Path `heightAtPeakInFeet` is required.');
  });

  it.skip('has a height at peak above 0', () => {
    const mountain = new Mountain({
      name: 'Mt Hood',
      heightAtPeakInFeet: -1,
      state: 'OR'
    });
    expect(mountain.validateSync().errors.heightAtPeakInFeet.message)
      .toEqual('Path `heightAtPeakInFeet` (-1) is less than minimum allowed value (0).');
  });

  it.skip('has a required state', () => {
    const mountain = new Mountain({
      name: 'Mt Hood',
      heightAtPeakInFeet: 11250
    });
    expect(mountain.validateSync().errors.state.message)
      .toEqual('Path `state` is required.');
  });
});
