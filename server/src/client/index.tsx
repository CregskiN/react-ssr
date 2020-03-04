import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const reducer = (state = { name: 'dell' }, action: any) => {
    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

import Routes from '../Routes';


const App: () => JSX.Element = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'));