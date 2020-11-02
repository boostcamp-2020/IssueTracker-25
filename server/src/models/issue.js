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
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  milestoneId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
};

const initOptions = {
  tableName: 'issues',
};

class Issue extends Model {
  static init(sequelize) {
    return super.init(scheme, { sequelize, ...initOptions });
  }

  static associate(models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Milestone);
    this.belongsToMany(models.User, {
      through: 'issue_assignees',
      timestamps: false,
      onDelete: 'cascade',
    });
    this.belongsToMany(models.Label, {
      through: 'issue_labels',
      timestamps: false,
      onDelete: 'cascade',
    });
  }
}

export default Issue;
