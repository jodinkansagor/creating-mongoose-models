require('dotenv').config();
require('./lib/utils/connect')();

const Skater = require('./lib/Models/Skater');



async function allMethods() {
  const createdSkater = await Skater.create({
    name: 'Jodi Bon Jodi',
    team: 'Willamette Kidney Thieves',
    skaterNumber: 908,
    positions: ['blocker', 'offense']
  });

  const oneFoundSkater = await Skater.findById(createdSkater._id);
  const allFoundSkaters = await Skater.find();

  const updatedSkater = await Skater.findByIdAndUpdate(oneFoundSkater._id, { name: 'JBJ' }, { new: true });

  const deletedSkater = await Skater.findByIdAndDelete(oneFoundSkater._id);
}

