import { DataTypes, Model } from 'sequelize';

const scheme = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  uid: {
    type: DataTypes.STRING(255),
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

  static associate(models) {
    this.belongsToMany(models.Issue, {
      through: 'issue_assignees',
      timestamps: false,
    });
  }
}

export default User;
