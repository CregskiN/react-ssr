import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Store } from 'redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { actionCreators } from './store';
import { TranslationState, RootState } from '../../types';
import { useWithStyle } from '../../hooks';
import styles from './style.css';


const Translation: React.FC = (props: any) => {
    const dispatch = useDispatch();
    const isLogin: boolean = useSelector<RootState, any>(state => state.header.isLogin, shallowEqual);
    const translationState: TranslationState = useSelector<RootState, any>(state => { return state.translation })
    const { translationsList } = translationState;

    useWithStyle(props, styles);

    useEffect(() => {
        if (translationsList.length === 0) {
            dispatch(actionCreators.getTranslationsList())
        }
    }, [])

    return (
        isLogin ?
            <div className={styles.translation_container}>
                <Helmet>
                    <title>CregskiN 的 ssr Translation界面</title>
                    <meta name='description' content='CregskiN 的 ssr translation界面激励咖喱啊' />
                </Helmet>
                {
                    translationsList.map(listItem => {
                        return <div className={styles.translation_item} key={listItem.id}>{listItem.title}</div>
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