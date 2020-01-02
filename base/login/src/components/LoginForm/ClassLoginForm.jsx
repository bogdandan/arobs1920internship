import React, {Component} from 'react';
import LoginFormComponent from './LoginFormComponent';

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

        return (<LoginFormComponent onSubmit={this.onSubmit} onChange={this.onChange} onFocus={this.onFocus}
                                    onBlur={this.onBlur} usernameError={usernameError} passwordError={passwordError}
                                    username={username} password={password}/>)
    }

}
