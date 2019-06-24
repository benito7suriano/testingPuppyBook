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
    it('responds with 200 and the correct puppy', async () => {         const puppy = await Puppy.create({ id: 1, name: 'One' })

      await request(app)
      .get('/api/puppies/1')
      .expect(200)
      .then((res) => {
        expect(res.body.name).to.equal(puppy.name)
      })
    })
  })

  describe('POST /api/puppies', () => {
    it('creates the puppy and responds with 201', async () => {
      await request(app)
      .post('/api/puppies')
      .send({id: 3, name: 'Three'})
      .expect(201)
      .then((res) => {
        expect(res.body.name).to.equal('Three')
      })

      const three = Puppy.findOne({
        where: {name: 'Three'}
      })

      expect(three).to.exist
    })
  })
})
