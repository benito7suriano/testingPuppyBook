const router = require('express').Router();
const Puppy = require('./db').models.puppy;

router.get('/', async (req, res, next) => {
  try {
    const puppies = await Puppy.findAll();
    res.json(puppies.map(({id, name}) => ({id, name})));
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const puppy = await Puppy.findById(req.params.id);
    if (!puppy) res.sendStatus(404);
    else res.json(puppy);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const puppy = await Puppy.create({ name: req.body.name });
    res.json(puppy);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
