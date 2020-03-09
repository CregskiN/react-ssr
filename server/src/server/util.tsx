import React, { Fragment } from 'react';
import { Request } from 'express';
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

import getStore from '../store';
import routes from '../Routes';
import { RouteType } from '../types';


/**
 * server渲染
 * @param req 
 */
async function render(req: Request) {

	const store = getStore();

	// 路由匹配
	const matchedRoutes = matchRoutes(routes, req.path)

	// 让matchedRoutes内所有路由的loadData(异步家在)执行一次
	const promises: any[] = [];

	matchedRoutes.forEach(item => {
		const route: RouteType = item.route;
		if(route.loadData){
			promises.push(route.loadData(store));
		}
	})

	await Promise.all(promises);

	console.log(store.getState());

	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<Fragment>
					{
						routes.map(route => {
							return <Route {...route} />
						})
					}
				</Fragment>
			</StaticRouter>
		</Provider>
	);

	return (`
		<html>
			<head>
				<title>ssr</title>
			</head>
				<body>
					<div id='root'>${content}</div>
				</body>
			<script src='/index.js'></script>
		</html>
    `)
}

export {
	render
}