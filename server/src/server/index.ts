import express, { Request, Response } from "express";
import proxy from 'express-http-proxy';

import { catchError } from '../middlewares/catchError';
import { render } from './util';
import { getStore } from '../store';
import { RouteType } from '../types';
import routes from '../Routes';
import { matchRoutes } from 'react-router-config';


const app = express();

app.use(express.static('public')); // 如果请求静态文件，express会从public目录寻找

/**
 * 对/api开头的http，代理到http://47.95.113.63
 */
app.use('/api', proxy('http://47.95.113.63', {
	proxyReqPathResolver: function (req) {
		return '/ssr/api' + req.url;
	}
}));


app.get('*', async (req: Request, res: Response) => {
	const store = getStore();
	// 路由匹配
	const matchedRoutes = matchRoutes(routes, req.path); 

	// 让matchedRoutes内所有路由的loadData(异步加载)执行一次
	const promises: any[] = [];
	matchedRoutes.forEach(item => {
		const route: RouteType = item.route;
		if (route.loadData) {
			promises.push(route.loadData(store));
		}
	})
	await Promise.all(promises);

	const ssrHTML = await render(req, store, routes);
	res.send(ssrHTML);
});

app.use(catchError());

app.listen(3000, () => {
	console.log(`listen 3000...`);
});