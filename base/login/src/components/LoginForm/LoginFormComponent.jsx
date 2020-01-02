import React, {useState} from 'react';

const LoginFormComponent = ({onSubmit,onChange, onFocus, onBlur, usernameError, passwordError, username, password}) => {
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
};

export default LoginFormComponent;
