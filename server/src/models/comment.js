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
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  issueId: {
    type: DataTypes.INTEGER.UNSIGNED,
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
    this.belongsTo(models.Issue, {
      onDelete: 'CASCADE',
    });
  }
}

export default Comment;
