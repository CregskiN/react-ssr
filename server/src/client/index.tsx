import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import getStore from '../store';
import routes from '../Routes';


const App: React.FC = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                <Fragment>
                    {
                        routes.map(route => {
                            return <Route {...route} />
                        })
                    }
                </Fragment>
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'));