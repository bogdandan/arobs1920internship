import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '../LoginPage';

describe('Login [page]', () => {

    it('should render login title', () => {
        const {getByTestId} = render(<LoginPage/>);

        const loginFormTitle = getByTestId('LoginFormTitle');

        expect(loginFormTitle).toHaveTextContent('Login');
    });

    it('should handle keyboard input for username', () => {
        const {getByTestId} = render(<LoginPage/>);

        const loginFormUsernameInput = getByTestId('LoginFormUsernameInput');

        const text = "admin";

        userEvent.type(loginFormUsernameInput, text);

        expect(loginFormUsernameInput).toHaveValue(text);
    });

    it('should handle keyboard input for password', () => {
        const {getByTestId} = render(<LoginPage/>);

        const loginFormPasswordInput = getByTestId('LoginFormPasswordInput');

        const text = "test";

        userEvent.type(loginFormPasswordInput, text);

        expect(loginFormPasswordInput).toHaveValue(text);
    });

    it('should render error if there\'s no username user clicks inside and outside of input', () => {
        const {getByTestId} = render(<LoginPage/>);

        const loginFormUsernameInput = getByTestId('LoginFormUsernameInput');
        const loginFormPasswordInput = getByTestId('LoginFormPasswordInput');

        const text = "Invalid input";

        userEvent.click(loginFormUsernameInput);
        userEvent.click(loginFormPasswordInput);

        // await wait(() => getByTestId('LoginFormUsernameError'));
        const loginFormUsernameError = getByTestId('LoginFormUsernameError');

        expect(loginFormUsernameError).toHaveTextContent(text);
    });

    it('should render error if there\'s no password user clicks inside and outside of input', () => {
        const {getByTestId} = render(<LoginPage/>);

        const loginFormPasswordInput = getByTestId('LoginFormPasswordInput');
        const loginFormUsernameInput = getByTestId('LoginFormUsernameInput');

        const text = "Invalid input";

        userEvent.click(loginFormPasswordInput);
        userEvent.click(loginFormUsernameInput);

        const passwordFormPasswordError = getByTestId('LoginFormPasswordError');

        expect(passwordFormPasswordError).toHaveTextContent(text);
    });

    it('should not call onSubmit if the form is not valid', () => {
        const onSubmit = jest.fn();

        const {getByTestId} = render(<LoginPage onSubmit={onSubmit}/>);

        const loginFormSubmitButton = getByTestId('LoginFormSubmitButton');

        userEvent.click(loginFormSubmitButton);

        expect(onSubmit).toHaveBeenCalledTimes(0);
    });

    it('should call onSubmit with username/password if the form is valid', () => {
        const onSubmit = jest.fn();

        const {getByTestId} = render(<LoginPage onSubmit={onSubmit}/>);

        const loginFormUsernameInput = getByTestId('LoginFormUsernameInput');
        const loginFormPasswordInput = getByTestId('LoginFormPasswordInput');

        const text = "test";

        userEvent.type(loginFormUsernameInput, text);
        userEvent.type(loginFormPasswordInput, text);

        const loginFormSubmitButton = getByTestId('LoginFormSubmitButton');

        userEvent.click(loginFormSubmitButton);

        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenLastCalledWith({username: text, password: text});
    });
});
