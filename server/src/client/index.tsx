import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { getClientStore } from '../store';
import routes from '../Routes';

const store = getClientStore();

const App: React.FC = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    {
                        renderRoutes(routes)
                    }
                </Fragment>
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'));