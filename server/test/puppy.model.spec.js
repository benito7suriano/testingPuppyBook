const { db, Puppy } = require('../db')
const { expect } = require('chai')

// Puppy
describe('Puppy model', () => {
  // Schema
  describe('Schema', () => {
    before('Synchronize the model', () => Puppy.sync({force: true}))

    beforeEach('Truncate data', () => Puppy.truncate())

    // it cannot be created without a name
    it('requires a "name" string', async () => {
      try {
        await Puppy.create()
        throw new Error('Puppy successfully created with no name')
      } catch (error) {
        expect(error.name).to.equal('SequelizeValidationError')
      }

      try {
        await Puppy.create('')
        throw new Error('Puppy sucessfully created with an empty name')
      } catch (error) {
        expect(error.name).to.equal('SequelizeValidationError')
      }

      try {
        await Puppy.create({name: [1,2,3]})
        throw new Error('Puppy successfully created with a non-string name')
      } catch(error) {
        expect(error.name).to.equal('SequelizeValidationError')
      }
    })

    // is created with an image type url
    it('expects "image" field to be a URL string if supplied')
    // DOB defaults to `new Date()`
    it('defaults DOB to current date')
  })

  // Virtuals
  describe('Virtuals', () => {
    // `age` getter
    describe('age getter', () => {
      // it calculates correct age based on date of birth
      it('calculates correct age based on date of birth')
      // returns 'unknown' if DOB is unknown
      it('returns "unknown" if DOB is unknown')
    })
  })
})

