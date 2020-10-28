import { DataTypes, Model } from 'sequelize';

const scheme = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contents: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isClosed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  closedAt: {
    type: DataTypes.DATE,
  },
};

const initOptions = {
  tableName: 'issues',
};

class Issue extends Model {
  static init(sequelize) {
    return super.init(scheme, { sequelize, ...initOptions });
  }
}

export default Issue;
