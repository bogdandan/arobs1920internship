import React from 'react';
import './App.css';
import Home from './pages/Homepage';
import Login from './pages/LoginPage';
import NotFound from './pages/NotFound';
import {Router} from '@reach/router';

function App() {
    return (
        <Router>
            <Home path={"/"}/>
            <Login path={"/login"}/>
            <NotFound path={"*"}/>
        </Router>
    );
}

export default App;
