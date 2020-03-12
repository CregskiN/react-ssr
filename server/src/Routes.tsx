import { RouteConfig } from 'react-router-config';

import App, { loadData as appLoadData } from './App';
import Home, { loadData as homeLoadData } from './containers/Home/index';
import Translation, { loadData as translationLoadData } from './containers/Translation/index';
import NotFound from './containers/NotFound';

/**
 * 多级路由的写法
 */

const routes: RouteConfig[] = [{
    path: '/',
    component: App, // 此处有类型名称兼容问题 不兼容React.FC，实际上二者相同
    loadData: appLoadData,
    routes: [
        {
            path: '/',
            component: Home,
            exact: true,
            loadData: homeLoadData,
            key: 'home',
        }, {
            path: '/translation',
            component: Translation,
            exact: true,
            loadData: translationLoadData,
            key: 'login',
        }, {
            component: NotFound,
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