import express, { Request, Response } from "express";
import proxy from 'express-http-proxy';

import { catchError } from '../middlewares/catchError';
import { render } from './util';
import { getStore } from '../store';
import { RouteType, Context } from '../types';
import routes from '../Routes';
import { matchRoutes } from 'react-router-config';


const app = express();

app.use(express.static('public')); // 如果请求静态文件，express会从public目录寻找

/**
 * 对/api开头的http，代理到http://47.95.113.63
 */
app.use('/api', proxy('http://localhost:7001', {
	proxyReqPathResolver: function (req) {
		return '/ssr/api' + req.url;
	}
}));


app.get('*', async (req: Request, res: Response) => {
	const store = getStore(req);
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

	const context: Context = {
		NOT_FOUND: false
	}

	const ssrHTML = await render(req, store, routes, context);

	// console.log(context);

	if (context.action === 'REPLACE') {
		res.redirect(301, context.url!);
	} else if (context.NOT_FOUND) {
		res.status(404);
	}

	res.send(ssrHTML);

});

app.use(catchError());

app.listen(3000, () => {
	console.log(`listen 3000...`);
});