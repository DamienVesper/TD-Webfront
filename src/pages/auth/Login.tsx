import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * The login page.
 */
class Login extends React.Component {
    render = () => {
        return (
            <div className="app">
                <h1>Throwdown.TV</h1>
            </div>
        );
    }
}

export default hot(module)(Login);
