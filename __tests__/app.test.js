require('dotenv').config();
require('../lib/utils/connect')();
const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');

describe('app routes', () => {
  // beforeAll(() => {
  //   mongoose.connection.db.dropDatabase();
  // });

  it('has an index page with a list of skaters', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.body).toEqual([{ '__v': expect.any(Number), '_id': expect.any(String), 'name': 'Jodi Bon Jodi', 'positions': ['blocker', 'offense'], 'skaterNumber': 908, 'team': 'Willamette Kidney Thieves' }]);
      });
  });

  it('has an addskaters page where one can add skaters', () => {
    return request(app)
      .post('/addskater')
      .send({
        'name': 'Bonnie Thunders',
        'team': 'Wheels of Justice',
        'skaterNumber': 340,
        'positions': ['jammer']
      })
      .then(res => {
        expect(res.body).toEqual({ '__v': expect.any(Number), '_id': expect.any(String), 'name': 'Bonnie Thunders', 'skaterNumber': 340, 'team': 'Wheels of Justice', 'positions': ['jammer'] });
      });
  });
});
