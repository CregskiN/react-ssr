import { NewsListItem, TranslationsListItem } from './index';

export interface ChangeHomeListAction {
    type: 'change_home_list';
    payload: {
        list: NewsListItem[]
    }
}

export interface ChangeIsLoginAction {
    type: 'change_is_login',
    payload: {
        isLogin: boolean
    }
}

export interface ChangeTranslationsAction {
    type: 'get_translations_list',
    payload: {
        translationsList: TranslationsListItem[]
    }
}