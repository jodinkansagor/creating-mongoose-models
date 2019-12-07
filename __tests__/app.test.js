require('dotenv').config();
require('../lib/utils/connect')();
const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');
const Skater = require('../lib/Models/Skater');

describe('app routes', () => {

  // beforeAll(() => {
  //   connect();
  // });
  beforeAll(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('has an addskaters page where one can add skaters', () => {
    return request(app)
      .post('/addskater')
      .send({
        'name': 'Jodi Bon Jodi',
        'team': 'Willamette Kidney Thieves',
        'skaterNumber': 908,
        'positions': ['blocker', 'offense']
      })
      .then(res => {
        expect(res.body).toEqual({ '__v': expect.any(Number), '_id': expect.any(String), 'name': 'Jodi Bon Jodi', 'positions': ['blocker', 'offense'], 'skaterNumber': 908, 'team': 'Willamette Kidney Thieves' });
      });
  });

  it('has an index page with a list of skaters', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.body).toEqual([{ '__v': expect.any(Number), '_id': expect.any(String), 'name': 'Jodi Bon Jodi', 'positions': ['blocker', 'offense'], 'skaterNumber': 908, 'team': 'Willamette Kidney Thieves' }]);
      });
  });

  it('can find one skater', async(done) => {
    const skater = await Skater.create({
      'name': 'Bonnie Thunders',
      'team': 'Wheels of Justice',
      'skaterNumber': 340,
      'positions': ['jammer']
    });

    return request(app)
      .get(`/${skater._id}`)
      .then(res => {
        expect(res.body).toEqual({ '__v': expect.any(Number), '_id': expect.any(String), 'name': 'Bonnie Thunders', 'positions': ['jammer'], 'skaterNumber': 340, 'team': 'Wheels of Justice' });
        done();
      });
  });

  it('can update a skater', async(done) => {
    const skater = await Skater.create({
      'name': 'Tiggz',
      'team': 'Wreckers',
      'skaterNumber': 97,
      'positions': ['blocker']
    });

    const updatedSkater = await Skater.findByIdAndUpdate(skater._id, {
      'name': 'Tiggz',
      'team': 'Jewish Roller Derby',
      'skaterNumber': 97,
      'positions': ['blocker']
    });
    return request(app)
      .get(`/${updatedSkater._id}`)
      .then(res => {
        expect(res.body).toEqual({ '__v': expect.any(Number), '_id': expect.any(String), 'name': 'Tiggz', 'positions': ['blocker'], 'skaterNumber': 97, 'team': 'Jewish Roller Derby' });
        done();
      });
  });

  it('can delete a skater', async(done) => {
    const skater = await Skater.create({
      'name': 'Tiggz',
      'team': 'Wreckers',
      'skaterNumber': 97,
      'positions': ['blocker']
    });

    return request(app)
      .get(`/${skater._id}`)
      .then(res => {
        expect(res.body).toEqual({ '__v': expect.any(Number), '_id': expect.any(String), 'name': 'Tiggz', 'positions': ['blocker'], 'skaterNumber': 97, 'team': 'Wreckers' });
        done();
      });
  });

});
