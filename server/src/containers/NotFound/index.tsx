import React from 'react';
import { RouteComponentProps } from 'react-router';

import { StaticRouterContextExtends } from '../../types';


const NotFound: React.FC<RouteComponentProps<any, StaticRouterContextExtends, any>> = (props) => {
    const { staticContext } = props;
    staticContext && (staticContext.NOT_FOUND = true);
    return (
        <div>
            sorry，您访问的页面不存在
        </div>
    )
};

export default NotFound;