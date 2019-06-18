const { db, Puppy } = require('../db')
const { expect } = require('chai')

// Puppy
describe('Puppy model', () => {
  // Schema
  describe('Schema', () => {
    // it cannot be created without a name
    it('requires a "name" string')
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

