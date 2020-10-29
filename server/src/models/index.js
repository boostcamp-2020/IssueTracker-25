import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from '../config';

const sequelizeConfigs = {
  ...config.db,
  define: {
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    underscored: true,
  },
  logging: process.env.NODE_ENV === 'test' ? false : console.log,
};

const sequelize = new Sequelize(sequelizeConfigs);

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== 'index.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default;
    model.init(sequelize);
    sequelize[model.name] = model;
  });

Object.values(sequelize.models).forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

export default { Sequelize, sequelize };
