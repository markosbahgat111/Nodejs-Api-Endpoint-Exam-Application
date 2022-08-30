import express, { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import path from 'path';

const getUserRank = express.Router();

const data = fs.readFileSync(path.resolve(__dirname, '../index.json'), {
	encoding: 'utf-8',
	flag: 'r'
});
const scoreList = JSON.parse(data)['scoresList'];
let count: number = 0;

getUserRank.post('/', (req: Request, res: Response, next: NextFunction) => {
	count = 0;
	const score = req.body.score;
	scoreList.map((item: number) => {
		if (item < score) count += 1;
	});
	const percentage = (count / scoreList.length) * 100;
	res.json({ rank: Number(percentage.toFixed(2)) });
	next();
});

export default getUserRank;
