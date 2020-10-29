import { Sequelize } from 'sequelize';
import config from '../config';
import User from './user';
import Issue from './issue';
import Label from './label';
import Milestone from './milestone';
import Comment from './comment';

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
const models = [User, Issue, Label, Milestone, Comment];
models.forEach((model) => model.init(sequelize));
models.forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

export default { Sequelize, sequelize };
