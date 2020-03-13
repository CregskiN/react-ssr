import { Store } from 'redux';
import { DefaultRootState } from 'react-redux';
import { RouteConfig } from 'react-router-config';
import { Action } from 'redux';
import { StaticRouterContext } from 'react-router'

export interface HeaderState {
    isLogin: boolean
}

export interface HomeState {
    name: string;
    newsList: NewsListItem[]
}

export interface RootState extends DefaultRootState {
    header: HeaderState;
    home: HomeState;
    translation: TranslationState;
}

export interface ActionType<T> extends Action<string> {
    payload: T;
}

export interface NewsListItem {
    id: number;
    title: string;
}

export interface TranslationsListItem {
    id: number;
    title: string;
}

export interface TranslationState {
    translationsList: TranslationsListItem[]
}

export interface ResponseResult {
    success: boolean;
    data: NewsListItem[] | TranslationsListItem[];
}

export * from './actionTypes';

export interface RouteType extends RouteConfig {
    loadData?: (store: Store) => any,
}


export interface StaticRouterContextExtends extends StaticRouterContext {
    NOT_FOUND?: boolean;
    css?: string[];
}

