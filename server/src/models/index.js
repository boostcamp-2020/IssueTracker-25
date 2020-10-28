import { Sequelize } from 'sequelize';
import config from '../config';
import User from './user';
import Issue from './issue';
import Label from './label';
import Milestone from './milestone';

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
Label.init(sequelize);
Milestone.init(sequelize);

export default { Sequelize, sequelize };
