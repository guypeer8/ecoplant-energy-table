"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const api_router_1 = __importDefault(require("./routers/api.router"));
const load_utils_1 = require("./utils/load-utils");
(0, load_utils_1.loadEnvVars)();
const app = (0, express_1.default)();
const port = process.env.NODE_PORT || '3001';
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.use('/api', api_router_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
