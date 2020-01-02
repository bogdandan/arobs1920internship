import React, {useState} from 'react';
import LoginFormComponent from './LoginFormComponent';

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onSubmit = e => {
        e.stopPropagation();
        e.preventDefault();

        if (usernameError || passwordError || !username || !password) return;

        console.log(username, password);
        props.onSubmit({username, password})
    };

    const onChange = e => {
        const {currentTarget: {name: property, value}} = e;

        if (property === 'username') {
            setUsername(value);
        } else if (property === 'password') {
            setPassword(value);
        }
    };

    const onFocus = e => {
        const {currentTarget: {name: property}} = e;

        if (property === 'username') {
            setUsernameError(false);
        } else if (property === 'password') {
            setPasswordError(false);
        }
    };

    const onBlur = e => {
        const {currentTarget: {name: property}} = e;

        if (property === 'username') {
            setUsernameError(!username);
        } else if (property === 'password') {
            setPasswordError(!password);
        }
    };

    return (<LoginFormComponent onSubmit={onSubmit} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
                                usernameError={usernameError}
                                passwordError={passwordError} username={username} password={password}/>)

}

export default LoginForm;
