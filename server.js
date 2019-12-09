require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app');


app.listen('8081', () => {
  console.log('Server is started. You got this! ');
});
