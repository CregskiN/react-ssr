import axios from 'axios';
import { Dispatch } from 'redux';

import { ListItem, ChangeHomeListAction, ResponseResult } from '../../../types';

export const changeHomeList = (list: ListItem[]) => {
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
    return (dispatch: Dispatch) => {
        return axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
            .then(res => {
                const responseResult: ResponseResult = res.data;
                const action = changeHomeList(responseResult?.data);
                dispatch(action);
            }).catch(err => {
                console.log(err);
            })
    }
}