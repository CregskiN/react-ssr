import React from 'react';
import { Store } from 'redux';
import { DefaultRootState } from 'react-redux';
import { RouteConfig } from 'react-router-config';

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

export interface HomeState extends DefaultRootState {
    name: string;
    newsList: ListItem[];
}

export interface ResponseResult {
    success: boolean;
    data: ListItem[];
}

export interface ChangeHomeListAction {
    type: 'change_home_list';
    payload: {
        list: ListItem[]
    }
}

export interface RouteType extends RouteConfig {
    loadData?: (store: Store) => any,
}

