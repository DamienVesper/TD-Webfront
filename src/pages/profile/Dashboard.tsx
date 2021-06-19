import React from 'react';
import { hot } from 'react-hot-loader';

// import $ from 'jquery';

import '../../../public/assets/scss/pages/dashboard.scss';

/**
 * The dashboard page.
 */
class Dashboard extends React.Component {
    render = () => {
        return (
            <main>
                <div className="container w-50">
                    <h1 className="text-center text-light my-5">Dashboard</h1>
                    <div className="card card-body text-dark">
                        <h2 className="text-center my-3">Stream Settings</h2>
                        <form action="/dashboard" method="post" id="dashboard-form">
                            <div className="form-group mb-3">
                                <label htmlFor="stream-title" className="form-label">Stream Title</label>
                                <input type="text" id="stream-title" name="stream-title" className="form-control" placeholder="Enter a title" maxLength={74} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="stream-description" className="form-label">Stream Description</label>
                                <textarea id="stream-description" name="stream-description" placeholder="Enter a description" className="form-control"></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="donation-link" className="form-label">Donation Link</label>
                                <input type="text" id="donation-link" name="donation-link" className="form-control" placeholder="Enter a URL to your donation page" />
                            </div>
                            <div className="form-group mb-3">
                                <div className="form-check form-switch">
                                    <input type="checkbox" className="form-check-input" id="allow-global-emotes" name="allow-global-emotes" value="true" />
                                    <label htmlFor="allow-global-emotes" className="form-check-label">
                                        Allow use of Global Stickers.
                                        (If enabled, stickers from other channels can be used on your chat)
                                    </label>
                                </div>
                                <br />

                                <input type="submit" id="dashboard-update-info" value="Update Stream Information" className="btn btn-primary btn-block" />
                                <a href="#" id="visit-livestream" className="btn btn-success btn-block dashboard-button mt-2" type="button" role="button">Livestream Page</a>
                            </div>
                        </form>
                    </div>
                    <br />

                    <div className="card card-body text-dark">
                        <h2 className="text-center">RTMP Servers</h2>
                        <br />
                        <div className="rtmp-servers text-center">
                            <div className="card p-8">
                                <span><b>US 01:</b></span>
                                <span><code>rtmp://us01.throwdown.tv/live</code></span>
                            </div>
                            <div className="card p-8">
                                <span><b>EU 01:</b></span>
                                <span><code>rtmp://eu01.throwdown.tv/live</code></span>
                            </div>
                            <div className="card p-8">
                                <span><b>EU 02:</b></span>
                                <span><code>rtmp://eu02.throwdown.tv/live</code></span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card card-body text-dark">
                        <h2 className="text-center my-3">Stream Key</h2>

                        <label htmlFor="stream-key" className="form-label">Stream Key</label>
                        <form action="/changestreamkey" method="post" id="streamkey-update-form">
                            <div className="form-group mb-3">
                                <input type="password" className="form-control" id="stream-key" readOnly />
                                <p>
                                    <input type="checkbox" id="reveal-stream-key" />
                                    Reveal Stream Key
                                </p>
                                <div className="d-grid gap-2 mt-3">
                                    <input type="submit" value="Copy Stream Key to Clipboard" id="copy-streamkey" className="btn btn-success btn-block" />
                                    <input type="submit" value="Reset Stream Key" id="reset-streamkey" className="btn btn-warning btn-block" />
                                </div>
                            </div>
                        </form>
                        <p>Do <b>NOT</b> share your stream key with anyone. This key allows anyone to broadcast on your channel.</p>
                    </div>
                    <br />
                    <div className="card card-body text-dark">
                        <h2 className="text-center">Widgets</h2>
                        <br />
                        <label htmlFor="chat-link">Chat Widget</label>
                        <input type="text" className="form-control" id="chat-link" readOnly />
                    </div>
                    <br />
                    <div className="card card-body text-dark">
                        <h2 className="text-center">Stickers (VIP Only)</h2>
                        <p id="sticker-info" className="text-center">To add stickers, join the <a href="https://discord.me/throwdowntv">Discord</a></p>
                        <br />
                        <div id="stickers"></div>
                    </div>
                    <br />
                </div>
            </main>
        );
    }
}

export default hot(module)(Dashboard);
