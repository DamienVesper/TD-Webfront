import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

class App extends React.Component {
    render = () => {
        return (
            <div id="app">
                <Header />
                <main>
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
                    </React.StrictMode>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
