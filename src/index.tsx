import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/auth">
                    <Route exact path="/auth/login">
                        <Login />
                    </Route>
                    <Route exact path="/auth/signup">
                        <Signup />
                    </Route>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.querySelector(`#root`)
);
