import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState, HeaderState } from '../../types';
import { actionCreators } from './store';
// import './index.css';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const headerState = useSelector<RootState, HeaderState>(state => { return state.header }, shallowEqual)

    const {
        isLogin,
    } = headerState

    const handleLogin = () => {
        dispatch(actionCreators.login());
    }

    const handleLogout = () => {
        dispatch(actionCreators.logout());
    }

    return (
        <div>
            <Link to='/'>首页</Link>
            {`islogin: ${isLogin}`}
            <br />
            {
                isLogin ?
                    <Fragment>
                        <Link to='/translation'>翻译列表</Link>
                        <br />
                        <div className='click' onClick={handleLogout}>退出</div>
                    </Fragment>
                    : <div className='click' onClick={handleLogin}>登陆</div>
            }
        </div >
    )
};

export default Header;