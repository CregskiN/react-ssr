import { Dispatch } from 'redux';

import { AxiosInstance } from 'axios';
import { NewsListItem, ChangeHomeListAction, ResponseResult } from '../../../types';


export const changeHomeListAction = (list: NewsListItem[]) => {
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
        return axiosInstance.get('/api/news.json')
            .then(res => {
                const responseResult: ResponseResult = res.data;
                const action = changeHomeListAction(responseResult?.data);
                dispatch(action);
            }).catch(err => {
                console.log('API geiHomeList 数据获取出错',err);
            })
    }
}

export const changeName = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'change_name',
            payload: {
                name: 'lee'
            }
        })
    }
}