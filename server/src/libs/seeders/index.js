import db from '../../models';
import * as userSeed from './user';
import * as labelSeed from './label';
import * as issueSeed from './issue';
import * as commentSeed from './comment';
import * as milestoneSeed from './milestone';

const { sequelize } = db;
const seeds = [userSeed, labelSeed, milestoneSeed, issueSeed, commentSeed];
async function seedInit() {
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await sequelize.truncate({ cascade: true });
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  seeds.reduce((acc, seed) => acc.then(() => seed.up()), Promise.resolve());
}

export default seedInit;
