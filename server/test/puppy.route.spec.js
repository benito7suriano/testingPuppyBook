const request  = require('supertest')
const app = require('../app')
const { expect } = require('chai')
const {db, Puppy} = require('../db')

describe('Puppy routes', () => {
  before('Sync the model', () => Puppy.sync({force:true}))
  beforeEach('Truncate data', () => {Puppy.truncate()})

  describe('GET /api/puppies', () => {
    it('responds with 200 and all puppies in the db', async () => {
      const pupCreations = [
        Puppy.create({ name: 'Alpha' }),
        Puppy.create({ name: 'Bravo' }),
        Puppy.create({ name: 'Charlie' })
      ]

      await Promise.all(pupCreations)

      await request(app)
        .get('/api/puppies')
        .expect(200)
        .then((res) => {
          expect(res.body).to.have.lengthOf(pupCreations.length)
        })
    })
  })

  describe('GET /api/puppies/:id', () => {
    it('responds with 200 and the correct puppy')
  })

  describe('POST /api/puppies', () => {
    it('creates the puppy and responds with 201')
  })
})
