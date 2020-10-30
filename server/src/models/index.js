import { Sequelize } from 'sequelize';
import config from '../config';
import User from './user';
import Label from './label';
import Issue from './issue';
import Comment from './comment';
import Milestone from './milestone';

const models = [User, Label, Issue, Comment, Milestone];

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

models.forEach((model) => model.init(sequelize));
models.forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

export default { Sequelize, sequelize };
