"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
require('dotenv').config();
const app = (0, express_1.default)();
const { PORT = 3001 } = process.env;
const staticPath = path_1.default.join(__dirname, '../ModelDataTEST', 'model_data');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(staticPath));
app.get('/model_metadata', (req, res) => {
    res.sendFile(staticPath + '/model.json');
});
app.listen(PORT, () => {
    console.log(`Server starting on ${PORT} port`);
});
