import { DataTypes, Model, Sequelize } from 'sequelize';

import { loadEnvVars } from '../utils/load-utils';

loadEnvVars();

export const sequelize = new Sequelize({
  database: process.env.MYSQL_DATABASE || 'ecoplant',
  username: process.env.MYSQL_USER || 'mysql',
  password: process.env.MYSQL_PASSWORD || 'mysql',
  host: process.env.MYSQL_HOST || 'mysql_container',
  port: parseInt(process.env.MYSQL_PORT || '3306', 10),
  dialect: 'mysql',
});

export class EnergyModel extends Model {}

EnergyModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  timestamp: DataTypes.DATE,
  kwh: DataTypes.DECIMAL,
  pressure: DataTypes.DECIMAL,
  temperature: DataTypes.DECIMAL,
}, { sequelize, timestamps: false, modelName: 'energy_data' });
