"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyModel = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const load_utils_1 = require("../utils/load-utils");
(0, load_utils_1.loadEnvVars)();
exports.sequelize = new sequelize_1.Sequelize({
    database: process.env.MYSQL_DATABASE || 'ecoplant',
    username: process.env.MYSQL_USER || 'mysql',
    password: process.env.MYSQL_PASSWORD || 'mysql',
    host: process.env.MYSQL_HOST || 'mysql_container',
    port: parseInt(process.env.MYSQL_PORT || '3306', 10),
    dialect: 'mysql',
});
class EnergyModel extends sequelize_1.Model {
}
exports.EnergyModel = EnergyModel;
EnergyModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    timestamp: sequelize_1.DataTypes.DATE,
    kwh: sequelize_1.DataTypes.DECIMAL,
    pressure: sequelize_1.DataTypes.DECIMAL,
    temperature: sequelize_1.DataTypes.DECIMAL,
}, { sequelize: exports.sequelize, timestamps: false, modelName: 'energy_data' });
