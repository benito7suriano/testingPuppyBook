const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db');
const app = express();

app.use(volleyball);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api/puppies', require('./puppyRouter'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

const startApp = async () => {
  try {
    await db.sync();
    app.listen(3000, function () {
      console.log('Server listening on port', 3000);
    });
  } catch (err) {
    console.error(err);
  }
};

startApp();
