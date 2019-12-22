import React from 'react';
import {LoginForm} from '../components/LoginForm';

function LoginPage({onSubmit}) {

    const handleSubmit = v => {
        onSubmit && onSubmit(v);
    };

    return (
        <LoginForm onSubmit={handleSubmit}/>
    )
}

export default LoginPage;
