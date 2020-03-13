import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Store } from 'redux';
import { Helmet } from 'react-helmet';

import { actionCreators } from './store'
import { RootState, HomeState } from '../../types';
import { useWithStyle } from '../../hooks';
import styles from './style.css';

const Home: React.FC = (props: any) => {
    const dispatch = useDispatch();
    const homeState = useSelector<RootState, HomeState>(state => { return state.home }, shallowEqual);
    const { name, newsList } = homeState;

    useEffect(() => {
        if (newsList.length === 0) {
            dispatch(actionCreators.getHomeList());
        }
    }, []);

    useWithStyle(props, styles);

    const handleChangeName = () => {
        dispatch(actionCreators.changeName())
    }

    const getList = () => {
        return newsList.map((item) => {
            return <div className={styles.home_listItem} key={item.id}>{`${item.id}  ${item.title}`}</div>
        })
    }

    return (
        <Fragment>
            <Helmet>
                <title>CregskiN 的 ssr Home界面</title>
                <meta name='description' content='CregskiN 的 ssr 新闻界面激励咖喱啊' />
            </Helmet>
            <div className={styles.home_container} >
                {getList()}
                <button className={styles.home_btn} onClick={handleChangeName}>click</button>
                <div className={styles.home_name}>{name}</div>
            </div>
        </Fragment>
    )
};

export const loadData = (store: Store<HomeState, any>) => {
    return store.dispatch(actionCreators.getHomeList());
}

export default Home;