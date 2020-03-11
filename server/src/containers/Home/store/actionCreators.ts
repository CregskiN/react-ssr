import { Dispatch } from 'redux';

import { AxiosInstance } from 'axios';
import { ListItem, ChangeHomeListAction, ResponseResult } from '../../../types';


export const changeHomeListAction = (list: ListItem[]) => {
    const action: ChangeHomeListAction = {
        type: 'change_home_list',
        payload: {
            list
        }
    }
    return action;
}

/**
 * axios GET列表
 */
export const getHomeList = () => {
    return (dispatch: Dispatch, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/news.json?secret=PP87ANTIPIRATE')
            .then(res => {
                const responseResult: ResponseResult = res.data;
                const action = changeHomeListAction(responseResult?.data);
                dispatch(action);
            }).catch(err => {
                console.log(err);
            })
    }
}