import { Request } from 'express';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import { reducer as headerReducer } from '../components/Header/store';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as translationReducer } from '../containers/Translation/store';
import clientAxios from '../client/require';
import serverAxios from '../server/require';

const reducers = combineReducers({
    header: headerReducer,
    home: homeReducer,
    translation: translationReducer
})

export function getStore(req: Request) {
    return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export function getClientStore() {
    const defaultStore = (window as any).context.state;
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, defaultStore, composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(clientAxios()))
    ));
}