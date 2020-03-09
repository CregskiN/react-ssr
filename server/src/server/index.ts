import express, { Request, Response } from "express";
import {catchError} from '../middlewares/catchError';
import { render } from './util';


const app = express();

app.use(catchError());

app.use(express.static('public')); // 如果请求静态文件，express会从public目录寻找

app.get('*', async (req: Request, res: Response) => {
	const ssrPage = await render(req);
	res.send(ssrPage);
});

app.listen(3000, () => {
	console.log(`listen 3000...`);
});