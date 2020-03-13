import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Request } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Store } from 'redux';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import { RouteType, StaticRouterContextExtends } from '../types';

/**
 * 
 * @param req 
 * @param store getStore创建
 * @param routes Router.ts
 */
async function render(req: Request, store: Store, routes: RouteType[], context: StaticRouterContextExtends) {

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

	const helmet = Helmet.renderStatic();

	const cssStr = context.css?.length ? context.css.join('\n') : '';

	console.log(cssStr);
	


	return (`
		<html>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
				<style>${cssStr}</style>
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