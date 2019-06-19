const { db, Puppy } = require('../db')
const chai = require('chai')
const { expect } = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
chai.use(require('chai-url'))

// Puppy
describe('Puppy model', () => {
  // Schema
  describe('Schema', () => {
    before('Synchronize the model', () => Puppy.sync({force: true}))

    beforeEach('Truncate data', () => Puppy.truncate())

    // it cannot be created without a name
    it('requires a "name" string', async () => {

      await expect(Puppy.create()).to.be.rejected
      await expect(Puppy.create('')).to.be.rejected
      await expect(Puppy.create({name: [1,2,3]})).to.be.rejected
    })

    // is created with an image type url
    it('expects "image" field to be a URL string if supplied', async () => {
      const puppy = Puppy.build({name:'Puppy'})

      await expect(puppy.save()).to.be.fulfilled
      puppy.image=['this is array, not string']

      await expect(puppy.save()).to.be.rejected
      puppy.image='this string is not URL'
      await expect(puppy.save()).to.be.rejected
    })
    // DOB defaults to `new Date()`
    it('defaults DOB to current date', async () => {
      const doggo = await Puppy.create({name: 'Doggo'})

      let d = new Date()
      let localTime = d.getTime()
      let localOffset = d.getTimezoneOffset() * 60000
      let utc = localTime + localOffset
      let offset = -6
      let ss = utc + (3600000 * offset)

      let now = new Date(ss)

      now = now.toISOString().slice(0,10)

      expect(doggo.DOB).to.equal(now)
    })
  })

  // Virtuals
  describe('Virtuals', () => {
    // `age` getter
    describe('age getter', () => {
      let pupperino
      beforeEach(() => {
        pupperino = Puppy.build({name: 'Pupperino'})
      })

      // it calculates correct age based on date of birth
      it('calculates correct age based on date of birth',async () => {
        const now = new Date()
        const someTimeAgo = now.setMonth(now.getMonth() - 15)
        pupperino.DOB = someTimeAgo
        await expect(pupperino.save()).to.eventually.have.property('age', '1yr 3mo')
      })
      // returns 'unknown' if DOB is unknown
      it('returns "unknown" if DOB is unknown', async () => {
        pupperino.DOB = null
        await expect(pupperino.save()).to.eventually.have.property('age','Unknown')
      })
    })
  })
})
