import React, { useEffect } from 'react';
import { useSelector, useDispatch,shallowEqual } from 'react-redux';
import { Store } from 'redux';

import { actionCreators } from './store'
import { RootState, HomeState,HeaderState } from '../../types';


const Home: React.FC = () => {
    const dispatch = useDispatch();
    const homeState = useSelector<RootState, HomeState>(state => { return state.home },shallowEqual);
    const {
        name,
        newsList
    } = homeState;

    useEffect(() => {
        if (newsList.length === 0) {
            dispatch(actionCreators.getHomeList());
        }
    }, []);

    const handleChangeName = () => {
        dispatch(actionCreators.changeName())
    }


    const getList = () => {
        return newsList.map((item) => {
            return <div key={item.id}>{`${item.id}  ${item.title}`}</div>
        })
    }

    return (
        <div>
            <div onClick={handleChangeName}>{name}</div>
            {getList()}
            <button onClick={() => { console.log('on click') }}>click</button>
        </div>
    )
};

export const loadData = (store: Store<HomeState, any>) => {
    return store.dispatch(actionCreators.getHomeList());
}

export default Home;