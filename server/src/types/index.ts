import { Store } from 'redux';
import { DefaultRootState } from 'react-redux';
import { RouteConfig } from 'react-router-config';

export interface HeaderState {
    isLogin: boolean
}

export interface HomeState {
    name: string;
    newsList: ListItem[]
}

export interface RootState extends DefaultRootState {
    header: HeaderState;
    home: HomeState;
}


interface Action<T> {
    type: T;
}

export interface ActionType<T> extends Action<string> {
    payload: T;
}

export interface ListItem {
    id: number;
    title: string;
}

export interface ResponseResult {
    success: boolean;
    data: ListItem[];
}

export * from './actionTypes';

export interface RouteType extends RouteConfig {
    loadData?: (store: Store) => any,
}

