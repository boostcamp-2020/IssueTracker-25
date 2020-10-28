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

Issue.belongsTo(User);
Issue.belongsTo(Milestone);
Comment.belongsTo(User);
Comment.belongsTo(Issue);
User.belongsToMany(Issue, { through: 'issue_assignees', timestamps: false });
Issue.belongsToMany(User, { through: 'issue_assignees', timestamps: false });
Issue.belongsToMany(Label, { through: 'issue_labels', timestamps: false });
Label.belongsToMany(Issue, { through: 'issue_labels', timestamps: false });

export default { Sequelize, sequelize };
