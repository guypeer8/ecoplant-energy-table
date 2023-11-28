"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, pageSize, startTimestamp, endTimestamp } = req.query;
        const _page = parseInt(page, 10) || 0;
        const _pageSize = parseInt(pageSize, 10) || 20;
        const offset = _page * _pageSize;
        const whereClause = startTimestamp && endTimestamp ? {
            timestamp: {
                [sequelize_1.Op.between]: [startTimestamp, endTimestamp],
            },
        } : {};
        yield db_1.EnergyModel.sync();
        const result = yield db_1.EnergyModel.findAndCountAll({
            where: Object.assign({}, whereClause),
            offset,
            limit: _pageSize,
        });
        res.json(result);
    }
    catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error fetching data');
    }
});
exports.index = index;
