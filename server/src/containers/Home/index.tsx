import React, { Props } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';

interface HomeStore {
    name: string
}


function Home(): JSX.Element {

    const state = useSelector(state => { return state });
    const {
        name
    } = state;

    return (
        <div>
            <Header />
            <div>{name}</div>
            <div>welcome to home</div>
            <button onClick={() => { console.log('on click') }}>click</button>
        </div>
    )
};

export default Home;