import React from 'react';
import Header from '../../components/Header';

const Login: () => JSX.Element = () => {

    return (
        <div>
            <Header />
            <div>welcome to Login</div>
            <button onClick={() => { console.log('on click') }}>click</button>
        </div>
    )
};

export default Login;