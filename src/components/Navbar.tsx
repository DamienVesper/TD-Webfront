import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * The Home page.
 * A React Router could switch here to load pages.
 */
class Home extends React.Component {
    render = () => {
        return (
            <div className="app">
                <h1>Throwdown.TV</h1>
            </div>
        );
    }
}

export default hot(module)(Home);
