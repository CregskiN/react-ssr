import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState, HeaderState, StaticRouterContextExtends } from '../../types';
import { actionCreators } from './store';
import styles from './index.css';

import { useWithStyle } from '../../hooks';

interface HeaderProps {
    staticContext?: StaticRouterContextExtends
}

const Header: React.FC<HeaderProps> = (props) => {
    const dispatch = useDispatch();
    const headerState = useSelector<RootState, HeaderState>(state => { return state.header }, shallowEqual)
    const { isLogin } = headerState

    useWithStyle(props, styles);

    const handleLogin = () => {
        dispatch(actionCreators.login());
    }

    const handleLogout = () => {
        dispatch(actionCreators.logout());
    }


    return (
        <div className={styles.header_container}>
            <Link className={styles.header_item} to='/'>首页</Link>
            
            {
                isLogin ?
                    <Fragment>
                        <Link className={styles.header_item} to='/translation'>翻译列表</Link>
                        <div className={styles.header_item} onClick={handleLogout}>退出</div>
                    </Fragment>
                    : <div className={styles.header_item} onClick={handleLogin}>登陆</div>
            }
            {`islogin: ${isLogin}`}
        </div >
    )
};

export default Header;