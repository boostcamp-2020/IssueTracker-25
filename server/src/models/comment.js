import { DataTypes, Model } from 'sequelize';

const scheme = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  contents: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const initOptions = {
  tableName: 'comments',
};

class Comment extends Model {
  static init(sequelize) {
    return super.init(scheme, { sequelize, ...initOptions });
  }

  static associate(models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Issue);
  }
}

export default Comment;
