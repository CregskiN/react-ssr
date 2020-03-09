import thunk from 'redux-thunk';
import { createStore, applyMiddleware,compose, combineReducers } from "redux";

import { reducer as homeReducer } from '../containers/Home/store';




const reducers = combineReducers({
    home: homeReducer,

})

export function getStore() {
    return createStore(reducers, applyMiddleware(thunk))
}

export function getClientStore() {
    const defaultStore = (window as any).context.state;
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, defaultStore, composeEnhancers(
        applyMiddleware(thunk) 
    ));
}