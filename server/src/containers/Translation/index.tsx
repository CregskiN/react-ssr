import React, { useEffect } from 'react';
import { actionCreators } from './store';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { TranslationState, RootState } from '../../types';
import { Store } from 'redux';
import { Redirect } from 'react-router-dom';


const Translation: React.FC = () => {
    const dispatch = useDispatch();
    const isLogin: boolean = useSelector<RootState, any>(state => state.header.isLogin);
    const translationState: TranslationState = useSelector<RootState, any>(state => { return state.translation })
    const {
        translationsList
    } = translationState;

    console.log(isLogin);

    useEffect(() => {
        if (translationsList.length === 0) {
            dispatch(actionCreators.getTranslationsList())
        }

    }, [])

    return (
        isLogin ?
            <div>
                {
                    translationsList.map(listItem => {
                        return <div key={listItem.id}>{listItem.title}</div>
                    })
                }
                <button onClick={() => { console.log('on click') }}>click</button>
            </div>
            : <Redirect to='/' />
    )
};

export const loadData = (store: Store<TranslationState, any>) => {
    return store.dispatch(actionCreators.getTranslationsList());
}

export default Translation;