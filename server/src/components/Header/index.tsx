import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState, HeaderState } from '../../types';
import { actionCreators } from './store';


const Header = () => {
    const dispatch = useDispatch();
    const headerState = useSelector<RootState, HeaderState>(state => {return state.header}, shallowEqual)

    const {
        isLogin,
    } = headerState

    console.log(isLogin);
    

    const handleLogin = () => {
        console.log('asd');
        
        dispatch(actionCreators.login())
    }

    const handleLogout = () => {
        dispatch(actionCreators.logout())
    }

    return (
        <div>
            <Link to='/'>首页</Link>
            {`islogin: ${isLogin}`}
            <br />
            {
                isLogin ?
                    <Fragment>
                        <Link to='/login'>翻译</Link>
                        <br />
                        <div onClick={handleLogout}>退出</div>
                    </Fragment>
                    : <div onClick={handleLogin}>登陆</div>
            }
        </div >
    )
};

export default Header;