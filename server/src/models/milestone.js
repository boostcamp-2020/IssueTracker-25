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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
  },
};

const initOptions = {
  tableName: 'milestones',
};

class Milestone extends Model {
  static init(sequelize) {
    return super.init(scheme, { sequelize, ...initOptions });
  }

  static associate(models) {
    this.hasMany(models.Issue, {
      foreignKey: 'milestoneId',
      as: 'Issues',
    });
  }
}

export default Milestone;
