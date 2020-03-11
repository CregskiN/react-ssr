import { Dispatch } from 'redux';
import { AxiosInstance } from 'axios';

import { ChangeIsLoginAction } from '../../../types';

const changeIsLoginAction: (isLogin: boolean) => ChangeIsLoginAction = (isLogin) => {
    return {
        type: 'change_is_login',
        payload: {
            isLogin
        }
    }
}

export const getHeaderInfo = () => {
    return (dispatch: Dispatch, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE')
            .then(res => {
                const isLogin: boolean = res.data?.data.login;
                dispatch(changeIsLoginAction(isLogin))
            }).catch(err => {
                console.log(err);
            })
    }
}

export const login = () => {
    return (dispatch: Dispatch, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/login.json')
            .then(res => {
                const isLogin: boolean = res.data?.data.login;
                dispatch(changeIsLoginAction(true))
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/logout.json')
            .then(res => {
                const isLogout: boolean = res.data?.data.logout;
                dispatch(changeIsLoginAction(false))
            })
    }
}