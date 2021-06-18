import React from 'react';
import { hot } from 'react-hot-loader';

import '../public/assets/scss/index.scss';

/**
 * The application layout.
 */
class App extends React.Component {
    render = () => {
        return (
            <div className="app">
                <h1>Throwdown.TV</h1>
            </div>
        );
    }
}

export default hot(module)(App);
