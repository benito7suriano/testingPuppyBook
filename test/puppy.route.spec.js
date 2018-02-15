const request = require('supertest');
const app = require('../server/app');
const Puppy = require('../server/db').models.puppy;

describe('Puppy routes', () => {
  before('Synchronize the model', () => Puppy.sync({ force: true }));
  beforeEach('Truncate data', () => Puppy.truncate());

  describe('GET /api/puppies', () => {
    it('responds with 200')
  });
});