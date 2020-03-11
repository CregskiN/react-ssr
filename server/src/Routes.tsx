import { RouteConfig } from 'react-router-config';

import Home, { loadData as homeLoadData } from './containers/Home/index';
import Login from './containers/Login/index';
import App, { loadData as appLoadData } from './App';


/**
 * 多级路由的写法
 */

const routes: RouteConfig[] = [{
    path: '/',
    component: App as React.FunctionComponent, // 此处有类型名称兼容问题 不兼容React.FC，实际上二者相同
    loadData: appLoadData,
    routes: [
        {
            path: '/',
            component: Home,
            exact: true,
            loadData: homeLoadData,
            key: 'home',
        }, {
            path: '/login',
            component: Login,
            exact: true,
            loadData: () => { },
            key: 'login',
        }
    ],
    key: 'App'
}];


// const routes: RouteConfig[] = 

export default routes;



// export default (
//     <Fragment>
//         <Route path='/' exact component={Home} />
//         <Route path='/login' exact component={Login} />
//     </Fragment>
// )