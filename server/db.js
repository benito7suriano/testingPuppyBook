const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/puppybook', { logging: false });

const Puppy = db.define('puppy', {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = db;
