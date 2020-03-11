import { ListItem } from './index';

export interface ChangeHomeListAction {
    type: 'change_home_list';
    payload: {
        list: ListItem[]
    }
}

export interface ChangeIsLoginAction {
    type: 'change_is_login',
    payload: {
        isLogin: boolean
    }
}