const express = require('express');
const volleyball = require('volleyball');
const path = require('path');

const db = require('./db');
const Puppy = db.models.puppy;
const app = express();

app.use(volleyball);
app.use(express.static('public'));

app.get('/api/puppies', async (req, res) => {
  const puppies = await Puppy.findAll();
  res.json(puppies.map(({id, name}) => ({id, name})));
});

app.get('/api/puppies/:id', async (req, res) => {
  const puppy = await Puppy.findById(req.params.id);
  if (!puppy) res.sendStatus(404);
  else res.json(puppy);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

const startApp = async () => {
  await db.sync();
  app.listen(3000, function () {
    console.log('Server listening on port', 3000);
  });
};

startApp();
