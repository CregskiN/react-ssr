import React, { Fragment } from 'react';
import { Store } from 'redux';
import { renderRoutes, RouteConfig } from 'react-router-config';


import Header from './components/Header/';
import { actionCreators } from './components/Header/store';
import {HeaderState} from './types';

interface AppProps extends RouteConfig {
    route: RouteConfig
}

const App: React.FC<AppProps> = (props) => {
    const {
        route
    } = props;
    // console.log(props); //TODO: 这里的props传值有key有错误，待验证
    return (
        <Fragment>
            <Header />
            {
                // 二级路由渲染
                renderRoutes(route.routes)
            }
        </Fragment>
    )
};

export const loadData = (store: Store<HeaderState, any>) => {
    return store.dispatch(actionCreators.getHeaderInfo());
}

export default App;