import React, { Fragment } from 'react';
import { Store } from 'redux';
import { renderRoutes, RouteConfig } from 'react-router-config';

import Header from './components/Header/';
import { actionCreators } from './components/Header/store';
import { HeaderState, StaticRouterContextExtends } from './types';

interface AppProps extends RouteConfig {
    route?: RouteConfig,
    staticContext?: StaticRouterContextExtends
}

const App: React.FC<AppProps> = (props) => {
    const {
        route,
        staticContext
    } = props;
    return (
        <Fragment>
            <Header staticContext={staticContext}/>
            {
                // 二级路由渲染
                renderRoutes(route?.routes)
            }
        </Fragment>
    )
};

export const loadData = (store: Store<HeaderState, any>) => {
   return store.dispatch(actionCreators.getHeaderInfo());
}

export default App;