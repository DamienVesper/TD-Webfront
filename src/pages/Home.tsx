import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * The Home page.
 */
class Home extends React.Component {
    render = () => {
        return (
            <main>
                <h1 className="text-center mt-5">Throwdown.TV</h1>
            </main>
        );
    }
}

export default hot(module)(Home);
