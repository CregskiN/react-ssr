import Home, { loadData } from './containers/Home/index';
import Login from './containers/Login/index';
// import { RouteType } from './types';
import { RouteConfig } from 'react-router-config';


const routes: RouteConfig[] = [
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: loadData,
        key: 'home',
    }, {
        path: '/login',
        component: Login,
        exact: true,
        loadData: () => { },
        key: 'login',
    }
];

export default routes;



// export default (
//     <Fragment>
//         <Route path='/' exact component={Home} />
//         <Route path='/login' exact component={Login} />
//     </Fragment>
// )