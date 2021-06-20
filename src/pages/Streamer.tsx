import React from 'react';
import { hot } from 'react-hot-loader';

declare const API_URL: string;

/**
 * The Home page.
 */
class Streamer extends React.Component {
    render = () => {
        return (
            <main className="text-center">
                <h1 className="mt-5 header">Throwdown.TV</h1>
                <p>Live streaming at its best. Supporting free speech, without censorship, for everyone, everywhere.</p>
            </main>
        );
    }

    componentDidMount = () => {
        const username = window.location.pathname.slice(1);
        fetch(`${API_URL}/api/public-stream-data/${username}`).then(data => data.json()).then((data: any) => {
            // if (!data) return console.log(`[ERROR]: Streamer Not Found...`);
        });
    }
}

export default hot(module)(Streamer);
