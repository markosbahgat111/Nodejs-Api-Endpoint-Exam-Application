"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const getUserRank = express_1.default.Router();
const data = fs.readFileSync(path_1.default.resolve(__dirname, '../index.json'), {
    encoding: 'utf-8',
    flag: 'r'
});
const scoreList = JSON.parse(data)['scoresList'];
let count = 0;
getUserRank.post('/', (req, res, next) => {
    count = 0;
    const score = req.body.score;
    scoreList.map((item) => {
        if (item < score)
            count += 1;
    });
    const percentage = (count / scoreList.length) * 100;
    res.json({ rank: Number(percentage.toFixed(2)) });
    next();
});
exports.default = getUserRank;
