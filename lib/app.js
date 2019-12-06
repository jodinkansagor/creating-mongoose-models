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
app.get('/:_id', (req, res) => {
  const { _id } = req.body;
  Skater.findById(_id)
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
app.put('/updateskater:_id', (req, res) => {
  const { _id, name, team, skaterNumber, positions } = req.body;
  Skater.findByIdAndUpdate(_id, { name, team, skaterNumber, positions })
    .then(skater => {
      res.send(skater);
    });
});


//delete skater

module.exports = app;
