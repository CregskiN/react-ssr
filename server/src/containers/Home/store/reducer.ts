import { HomeState, ChangeHomeListAction } from '../../../types';

const defaultState: HomeState = {
    name: 'dell',
    newsList: [],
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case 'change_home_list': {
            const thisAction: ChangeHomeListAction = action;
            const { list } = thisAction.payload;
            return {
                ...state,
                newsList: list
            };
        }

        case 'change_name': {
            const { name } = action.payload;
            return {
                ...state,
                name
            }
        }

        default:
            return state;
    }
}

