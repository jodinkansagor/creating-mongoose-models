const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', () => {
    console.log('We are connected! You are doing a great job! ❤️');
  });

  mongoose.connection.on('error', () => {
    console.log('We cannot connect. It\'s cool, just try again. 💩');
  });
}

module.exports = connect;
