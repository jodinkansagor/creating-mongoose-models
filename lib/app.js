const express = require('express');
const app = express();
const Skater = require('../lib/Models/Skater');


app.use(express.json());

//get all skaters
app.get('/', (req, res) => {
  Skater.find()
    .then(skaters => {
      res.send(skaters);
    });  
});


//get one skater
app.get('/:id', (req, res) => {
  const { id } = req.params;
  Skater.findById(id)
    .then(skater => {
      res.send(skater);
    });
});

//add new skater
app.post('/addskater', (req, res) => {
  const { name, 
    team, 
    skaterNumber, 
    positions } = req.body;
  Skater.create({
    name, 
    team, 
    skaterNumber, 
    positions
  }) 
    .then(skater => {
      res.send(skater);
    });
});

//update skater
app.put('/:_id', (req, res) => {
  const { _id } = req.params;
  const { name, team, skaterNumber, positions } = req.body;
  Skater.findByIdAndUpdate(_id, { name, team, skaterNumber, positions })
    .then(skater => {
      res.send(skater);
    });
});

//delete skater
app.delete('/:_id', (req, res) => {
  const { _id } = req.params;
  Skater.findByIdAndDelete(_id)
    .then(skater => {
      res.send(skater);
    });
});

module.exports = app;
