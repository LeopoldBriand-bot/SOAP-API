'use strict';

import Sequelize, { DataTypes } from 'sequelize';

import book from './book';
import author from './author';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const models = [];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


models.push(book(sequelize, DataTypes));
models.push(author(sequelize, DataTypes));

models.forEach(model => {
  db[model.name] = model;
})



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
