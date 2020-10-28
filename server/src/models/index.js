import { Sequelize } from 'sequelize';
import config from '../config';
import User from './user';
import Issue from './issue';

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

User.init(sequelize);
Issue.init(sequelize);

export default { Sequelize, sequelize };
