const Tarot = require('./Tarot');

describe('Tarot model', () => {
  it.skip('has a required cardName', () => {
    const tarot = new Tarot({
    });
    expect(tarot.validateSync().errors.cardName.message)
      .toEqual('Path `cardName` is required.');
  });

  it.skip('has a required majorArcana value', () => {
    const tarot = new Tarot({
      cardName: 'The High Priestess'
    });
    expect(tarot.validateSync().errors.majorArcana.message)
      .toEqual('Path `majorArcana` is required.');
  });

  it.skip('has a required minorArcana value', () => {
    const tarot = new Tarot({
      cardName: 'High Priestess'
    });
    expect(tarot.validateSync().errors.minorArcana.message)
      .toEqual('Path `minorArcana` is required.');
  });

  it.skip('has a required suit value', () => {
    const tarot = new Tarot({
      cardName: 'High Priestess'
    });
    expect(tarot.validateSync().errors.suit.message)
      .toEqual('Path `suit` is required.');
  });

  it.skip('has a required value value', () => {
    const tarot = new Tarot({
      cardName: 'High Priestess'
    });
    expect(tarot.validateSync().errors.value.message)
      .toEqual('Path `value` is required.');
  });
});
