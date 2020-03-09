import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from 'redux';
import Header from '../../components/Header';
import { actionCreators } from './store'
import { HomeState } from '../../types';


const Home: React.FC = () => {
    const home = useSelector<any, HomeState>(state => { return state.home });
    const dispatch = useDispatch();
    const {
        name,
        newsList
    } = home;
    
    useEffect(() => {
        dispatch(actionCreators.getHomeList());
    }, []);

    const getList = () => {
        return newsList.map((item) => {
            return <div key={item.id}>{`${item.id}  ${item.title}`}</div>
        })
    }

    return (
        <div>
            <Header />
            <div>{name}</div>
            { getList() }
            <button onClick={() => { console.log('on click') }}>click</button>
        </div>
    )
};

export const loadData = (store: Store<HomeState, any>) => {
    return store.dispatch(actionCreators.getHomeList());
}

export default Home;