import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";

import { reducer as homeReducer } from '../containers/Home/store';

const reducers = combineReducers({
    home: homeReducer,
    
})




function getStore() {
    return createStore(reducers, applyMiddleware(thunk));
}

export default getStore;