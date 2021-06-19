import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { hot } from 'react-hot-loader';

import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import '../public/assets/scss/index.scss';

import 'bootstrap';
import 'jquery';

class App extends React.Component {
    render = () => {
        return (
            <div id="app" className="text-light">
                <Header />
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
                <Footer />
            </div>
        );
    }
}

export default hot(module)(App);
