import React from 'react';
import Header from '../../components/Header';

const Login: React.FC = () => {

    return (
        <div>
            <Header />
            <div>welcome to Login</div>
            <button onClick={() => { console.log('on click') }}>click</button>
        </div>
    )
};

export default Login;