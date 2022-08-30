import express, { Response, Request, NextFunction } from 'express';
import getWords from './routes/getWords';
import cors from 'cors';
import getUserRank from './routes/rank';
import { config } from './config/config';
const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all('/api/all', (req: Request, res: Response) => {
	return res.sendStatus(200);
});
app.get('/', (req: Request, res: Response) => {
	return res.sendStatus(200);
});

app.use('/get-words', getWords);
app.use('/rank', getUserRank);
app.listen(config.server.port, () => console.log('Server is running on port:5000...'));
