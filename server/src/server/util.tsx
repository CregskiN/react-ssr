import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Request } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Store } from 'redux';
import { renderRoutes } from 'react-router-config';

import { RouteType, Context } from '../types';

/**
 * 
 * @param req 
 * @param store getStore创建
 * @param routes Router.ts
 */
async function render(req: Request, store: Store, routes: RouteType[], context: Context) {



	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<Fragment>
					{
						// 一级路由渲染
						renderRoutes(routes)
						// routes.map(route => {
						// 	return <Route {...route} />
						// })
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
				<script>
					window.context = {
						state: ${JSON.stringify(store.getState())}
					}
				</script>
			<script src='/index.js'></script>
		</html>
    `)
}

export {
	render
}