import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { getClientStore } from '../store';
import routes from '../Routes';

const store = getClientStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {
                        routes.map(route => {
                            return <Route {...route} />
                        })
                    }
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'));