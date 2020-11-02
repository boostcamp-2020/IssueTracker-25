import db from '../../models';
import numModelData from './num-model-data';

const { User: UserModel } = db.sequelize.models;

export async function up() {
  const { USER: nRowInUser } = numModelData;
  const baseName = 'user';
  const profileLink =
    'https://news.samsungdisplay.com/wp-content/uploads/2018/08/8-768x576.jpg';
  const mail = 'naver.com';
  const bulkUsers = new Array(nRowInUser).fill().reduce((users, x, idx) => {
    const name = `${baseName}${idx + 1}`;
    const user = {
      name,
      uid: `${name}@${mail}`,
      profileLink,
    };
    return [...users, user];
  }, []);
  await UserModel.bulkCreate(bulkUsers);
}

export async function down() {
  await UserModel.destroy({ truncate: true, cascade: true });
}
