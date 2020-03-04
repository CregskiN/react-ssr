import express, { Request, Response } from "express";
import { render } from './util';

const app = express();

app.use(express.static('public')); // 如果请求静态文件，express会从public目录寻找

app.get('*', (req: Request, res: Response) => {
	res.send(render(req));
});

app.listen(3000, () => {
	console.log(`listen 3000...`);
});