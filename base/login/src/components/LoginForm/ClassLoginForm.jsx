import React, {Component} from 'react';

export default class LoginForm extends Component {
    state = {
        username: {value: '', error: false},
        password: {value: '', error: false}
    };

    onSubmit = e => {
        e.stopPropagation();
        e.preventDefault();
        /*
        const username = e.currentTarget.username.value
        const password = e.currentTarget.password.value
        const {currentTarget: {username: {value: username}, password: {value: password}}} = e;
        */
        const {username, password} = this.state;

        if (username.error || password.error || !username.value || !password.value) return;

        console.log(username.value, password.value);
        this.props.onSubmit({username: username.value, password: password.value})
    };

    onChange = e => {
        /*
        const property = e.currentTarget.name;
        const value = e.currentTarget.value;
        */

        const {currentTarget: {name: property, value}} = e;
        this.setState(prevState => ({...prevState, [property]: {...prevState[property], value}}));
    };

    onFocus = e => {
        const {currentTarget: {name: property}} = e;
        this.setState(prevState => ({...prevState, [property]: {...prevState[property], error: false}}));
    };

    onBlur = e => {
        const {currentTarget: {name: property}} = e;
        this.setState(prevState => ({
            ...prevState,
            [property]: {...prevState[property], error: !prevState[property].value}
        }));
    };

    render() {
        const {username: {value: username, error: usernameError}, password: {value: password, error: passwordError}} = this.state;
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <form onSubmit={this.onSubmit}>
                    <h1 data-testid={"LoginFormTitle"}>Login</h1>
                    <div>
                        <label>username:</label>
                    </div>
                    <input data-testid={"LoginFormUsernameInput"} name={"username"} type={"text"} value={username}
                           onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}/>
                    <span data-testid={"LoginFormUsernameError"}>{!!usernameError && 'Invalid input'}</span>
                    <div>
                        <label>password:</label>
                    </div>
                    <input data-testid={"LoginFormPasswordInput"} name={"password"} type={"password"} value={password}
                           onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}/>
                    <span data-testid={"LoginFormPasswordError"}>{!!passwordError && 'Invalid input'}</span>
                    <div>
                        <button data-testid={"LoginFormSubmitButton"} type={"submit"}>login</button>
                    </div>
                </form>
            </div>
        )
    }

}
