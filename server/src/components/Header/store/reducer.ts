import { ChangeIsLoginAction, HeaderState } from '../../../types';

const defaultState: HeaderState = {
    isLogin: false,
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case 'change_is_login': {
            const thisAction: ChangeIsLoginAction = action;
            const {
                isLogin
            } = thisAction.payload;
            const newState = state; 
            newState.isLogin = isLogin;
            console.log(newState);
            
            return newState;
        }

        default:
            return state;
    }
}