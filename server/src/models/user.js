import { DataTypes, Model } from 'sequelize';

const scheme = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: new DataTypes.STRING(100),
    allowNull: false,
  },
  uid: {
    type: new DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  profile_link: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
};

const initOptions = {
  tableName: 'users',
};

class User extends Model {
  static init(sequelize) {
    return super.init(scheme, { sequelize, ...initOptions });
  }
}

export default User;
