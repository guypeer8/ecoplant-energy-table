"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const energy_controller_1 = require("../controllers/energy.controller");
const router = express_1.default.Router();
router.get('/', energy_controller_1.index);
exports.default = router;
