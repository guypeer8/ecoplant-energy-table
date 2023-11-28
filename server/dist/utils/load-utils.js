"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvVars = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const loadEnvVars = () => {
    if (process.env.NODE_ENV !== 'production') {
        dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '..', '.env.dev') });
    }
    else {
        dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '..', '.env.prod') });
    }
};
exports.loadEnvVars = loadEnvVars;
