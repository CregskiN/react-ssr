import { ChangeIsLoginAction, HeaderState } from '../../../types';

const defaultState: HeaderState = {
    isLogin: true,
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case 'change_is_login': {
            const thisAction: ChangeIsLoginAction = action;
            const {
                isLogin
            } = thisAction.payload;
            return {
                ...state,
                isLogin
            };
        }

        default:
            return state;
    }
}