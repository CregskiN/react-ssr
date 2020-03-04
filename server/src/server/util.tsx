import React from 'react';
import { Request } from 'express';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import Routes from '../Routes';


function render(req: Request) {

	const reducer = (state = { name: 'dell' }, action: any) => {
		return state;
	}

	const store = createStore(reducer);

	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				{Routes}
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