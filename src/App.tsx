// React libraries.
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { hot } from 'react-hot-loader';

// Home page.
import Home from './pages/Home';

// Page components.
import Header from './components/Header';
import Footer from './components/Footer';

// Authentication pages.
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// Settings pages.
import Dashboard from './pages/settings/Dashboard';
import Settings from './pages/settings/Settings';

// Legal pages.
import ToS from './pages/legal/ToS';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

// Widgets.
import ChatWidget from './widgets/Chat';

// Templating pages.
import Streamer from './pages/Streamer';
import Chat from './pages/Chat';

// Error pages.
import Error404 from './errors/404';

import '../public/assets/scss/index.scss';

import 'bootstrap';

class App extends React.Component {
    render = () => {
        return (
            <div id="app" className="text-light d-flex flex-column h-100">
                {
                    !window.location.pathname.split(`/`).includes(`widget`) &&
                    !window.location.pathname.split(`/`).includes(`chat`) &&
                     <Header />
                }
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

                        {/* Chat */}
                        <Route path ="/chat">
                            < Chat />
                        </Route>

                        {/* Widgets */}
                        <Route path="/widget">
                            <Route exact path="/widget/chat">
                                <ChatWidget />
                            </Route>
                        </Route>

                        {/* Streamer Pages */}
                        <Route path="/">
                            <Streamer />
                        </Route>

                        {/* Error Handler */}
                        <Route path="/">
                            <Error404 />
                        </Route>
                    </Switch>
                </Router>
                {
                    !window.location.pathname.split(`/`).includes(`widget`) &&
                    !window.location.pathname.split(`/`).includes(`chat`) &&
                    <Footer />
                }
            </div>
        );
    }
}

export default hot(module)(App);
