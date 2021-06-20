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

import Streamer from './pages/Streamer';

import ToS from './pages/legal/ToS';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

import ChatWidget from './widgets/Chat';

import Chat from './Chat';

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
                        <Route path="/:username">
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
