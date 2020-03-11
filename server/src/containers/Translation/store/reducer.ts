
import { TranslationState, ChangeTranslationsAction } from '../../../types';

const defaultState: TranslationState = {
    translationsList: []
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case 'get_translations_list': {
            const thisAction: ChangeTranslationsAction = action;
            const { translationsList } = thisAction.payload;
            return {
                ...state,
                translationsList
            };
        }

        default:
            return state;
    }
}

