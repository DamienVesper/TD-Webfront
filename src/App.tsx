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

import Dashboard from './pages/profile/Dashboard';
import Settings from './pages/profile/Settings';

import ToS from './pages/legal/ToS';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

import Error404 from './404';

import '../public/assets/scss/index.scss';

import 'bootstrap';

class App extends React.Component {
    render = () => {
        return (
            <div id="app" className="text-light d-flex flex-column h-100">
                <Header />
                <Router>
                    <Switch>
                        {/* Landing Page */}
                        <Route exact path="/">
                            <Home />
                        </Route>

                        {/* Authentication */}
                        <Route path="/auth">
                            <Route exact path="/auth/login">
                                <Login />
                            </Route>
                            <Route exact path="/auth/signup">
                                <Signup />
                            </Route>
                        </Route>

                        {/* Account Settings */}
                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route exact path="/settings">
                            <Settings />
                        </Route>

                        {/* Legal */}
                        <Route exact path="/tos">
                            <ToS />
                        </Route>
                        <Route exact path="/privacy-policy">
                            <PrivacyPolicy />
                        </Route>

                        {/* Error Handler */}
                        <Route path="/">
                            <Error404 />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default hot(module)(App);
