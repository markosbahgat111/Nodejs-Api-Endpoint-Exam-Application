"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getWords_1 = __importDefault(require("./routes/getWords"));
const cors_1 = __importDefault(require("cors"));
const rank_1 = __importDefault(require("./routes/rank"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.all('/api/all', (req, res) => {
    return res.sendStatus(200);
});
app.get('/', (req, res) => {
    return res.sendStatus(200);
});
app.use('/get-words', getWords_1.default);
app.use('/rank', rank_1.default);
app.listen(config_1.config.server.port, () => console.log('Server is running on port:5000...'));
