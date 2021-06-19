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
                <h1 className="text-center text-light mt-5 mb-4">Dashboard</h1>
                <div className="mx-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-body text-dark mt-4">
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
                            <div className="card card-body text-dark mt-4">
                                <h2 className="text-center my-3">Widgets</h2>
                                <label htmlFor="chat-link" className="form-label">Chat</label>
                                <input type="text" className="form-control" id="chat-link" readOnly />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card card-body text-dark mt-4">
                                <h2 className="text-center my-3">Stream Key</h2>

                                <label htmlFor="stream-key" className="form-label">Stream Key</label>
                                <form action="/api/change-stream-key" method="post" id="streamkey-update-form">
                                    <div className="form-group mb-3">
                                        <input type="password" className="form-control mb-2" id="stream-key" readOnly />
                                        <div className="form-check">
                                            <input type="checkbox" id="reveal-stream-key" className="form-check-input" />
                                            <label htmlFor="reveal-stream-key" className="form-check-label">Reveal Stream Key</label>
                                        </div>
                                    </div>
                                    <input type="submit" value="Copy Stream Key to Clipboard" id="copy-streamkey" className="btn btn-success btn-block" />
                                    <input type="submit" value="Reset Stream Key" id="reset-streamkey" className="btn btn-primary btn-block mt-3" />
                                </form>
                                <p className="mt-3">Do <strong>NOT</strong> share your stream key with anyone. This key allows anyone to broadcast on your channel.</p>
                            </div>
                            <div className="card card-body text-dark mt-4">
                                <h2 className="text-center mt-3">RTMP Servers</h2>
                                <div className="rtmp-servers text-center">
                                    <div className="card p-2 m-3">
                                        <span><b>US 01:</b></span>
                                        <span><code>rtmp://us01.throwdown.tv/live</code></span>
                                    </div>
                                    <div className="card p-2 m-3">
                                        <span><b>EU 01:</b></span>
                                        <span><code>rtmp://eu01.throwdown.tv/live</code></span>
                                    </div>
                                    <div className="card p-2 m-3">
                                        <span><b>EU 02:</b></span>
                                        <span><code>rtmp://eu02.throwdown.tv/live</code></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-body text-dark mt-4">
                                <h2 className="text-center my-3">Stickers (VIP Only)</h2>
                                <p id="sticker-info" className="text-center mb-3">To add stickers, join the <a href="https://discord.throwdown.tv">Discord</a>.</p>
                                <div id="stickers"></div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default hot(module)(Dashboard);
