import React, {useState} from 'react';

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

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <form onSubmit={onSubmit}>
                <h1 data-testid={"LoginFormTitle"}>Login</h1>
                <div>
                    <label>username:</label>
                </div>
                <input data-testid={"LoginFormUsernameInput"} name={"username"} type={"text"} value={username}
                       onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
                <span data-testid={"LoginFormUsernameError"}>{!!usernameError && 'Invalid input'}</span>
                <div>
                    <label>password:</label>
                </div>
                <input data-testid={"LoginFormPasswordInput"} name={"password"} type={"password"} value={password}
                       onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
                <span data-testid={"LoginFormPasswordError"}>{!!passwordError && 'Invalid input'}</span>
                <div>
                    <button data-testid={"LoginFormSubmitButton"} type={"submit"}>login</button>
                </div>
            </form>
        </div>
    )

}

export default LoginForm;
