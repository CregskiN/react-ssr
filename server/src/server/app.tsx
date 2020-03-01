import express, { Request, Response } from "express";
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import Routes from '../Routes';

const app = express();

app.use(express.static('public')); // 如果请求静态文件，express会从public目录寻找

app.get('*', (req: Request, res: Response) => {

	const content = renderToString(
		<StaticRouter location={req.path} context={{}}>
			{Routes}
		</StaticRouter>
	);

	res.send(`
		<html>
			<head>
				<title>ssr</title>
			</head>
				<body>
					<div id='root'>${content}</div>
				</body>
			<script src='/index.js'></script>
		</html>
  `);

});

app.listen(3000, () => {
	console.log(`listen 3000...`);
});