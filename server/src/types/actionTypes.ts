import { ListItem } from './index';
export interface ChangeHomeListAction {
    type: 'change_home_list';
    payload: {
        list: ListItem[]
    }
}