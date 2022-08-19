import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class Teams extends Model {
  public id!: number;
  public teamName!: string;
}

Teams.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  sequelize: db,
  modelName: 'Teams',
  underscored: true,
  timestamps: false,
  tableName: 'teams',
});
