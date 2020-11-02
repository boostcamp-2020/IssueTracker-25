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
  // seeds.reduce((acc, cur) => acc.then(() => cur.down()), Promise.resolve());
  // ok 흐음...아..
  // await Promise.all(seeds.map((seed) => seed.down()));

  await sequelize.truncate({ cascade: true });
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  await Promise.all(seeds.map((seed) => seed.up()));
}

export default seedInit;
