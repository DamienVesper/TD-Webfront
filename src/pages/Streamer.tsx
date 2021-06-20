import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * The Home page.
 */
class Streamer extends React.Component {
    render = () => {
        return (
            <main className="text-center">
                <h1 className="mt-5">Throwdown.TV</h1>
                <p>Live streaming at its best. Supporting free speech, without censorship, for everyone, everywhere.</p>
            </main>
        );
    }
}

export default hot(module)(Streamer);
