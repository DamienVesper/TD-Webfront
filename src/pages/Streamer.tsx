import React from 'react';
import { hot } from 'react-hot-loader';
import VideoJS from 'video.js';

declare const API_URL: string;

const options = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 1280,
    height: 720,
    fluid: true,
    controls: true,
    sources: [
        {
            src: `//vjs.zencdn.net/v/oceans.mp4`,
            type: `video/mp4`
        }
    ]
};

/**
 * The Home page.
 */
class Streamer extends React.Component {
    render = () => {
        return (
            <main className="text-center">
                <div className="stream-overlay">
                    <div className="stream-popout">
                        <VideoJS {...options} />

                        <ul className="mobile-tabs nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="chat-tab" data-toggle="tab" role="tab" href="" aria-selected="true">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="about-tab" data-toggle="tab" role="tab" href="" aria-selected="false">About</a>
                            </li>
                        </ul>

                        <div className="interaction-btns mobile-active">
                            <button type="submit" className="btn btn-sm btn-primary follow-streamer-btn">Follow</button>
                            <button type="submit" className="btn btn-sm btn-success donate-btn">Donate</button>
                            <button type="submit" className="btn btn-sm btn-danger report-btn"><i className="icofont icofont-flag"></i></button>
                        </div>

                        <div className="info-box">
                            <div className="profile-picture"><img src="/assets/img/defaultpfp.png" id="avatar" className="circle-crop" alt="Avatar" />
                                <div className="streamer-content mb-3">
                                    <span className="stream-title desktop-active lead"></span>

                                    <div className="streamer-name">
                                        <img src="/assets/img/chat/badges/staff.png" id="staffbadge" width="15" height="15" alt="[Throwdown Staff]" title="ThrowdownTV Staff" />
                                        <img src="/assets/img/chat/badges/vip.png" id="vipbadge" width="15" height="15" alt="[VIP]" title="ThrowdownTV VIP Member" />
                                        <span id="stream-display-name" className="lead"></span>
                                    </div>
                                </div>

                                <div className="streamer-buttons">
                                    <div className="streamer-button-content">
                                        <span id="live-status">LOADING...</span>
                                        <span className="viewers text-danger" title="Live Viewers">
                                            <i className="streamer-icon icofont icofont-eye-alt" /><span className="viewer-count">0</span>
                                        </span>
                                        <span className="followers text-primary" title="Followers">
                                            <i className="streamer-icon icofont icofont-people" /><span className="follow-count">0</span>
                                        </span>
                                        <div className="interaction-btns desktop-active">
                                            <button type="submit" className="btn btn-sm btn-primary follow-streamer-btn">Follow</button>
                                            <button type="submit" className="btn btn-sm btn-success donate-btn">Donate</button>
                                            <button type="submit" className="btn btn-sm btn-danger report-btn"><i className="icofont icofont-flag" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span className="stream-title mobile-active lead"></span>
                            <div id="stream-description" />
                        </div>
                        <iframe className="chat-popout" frameBorder="0" height="720px"></iframe>
                    </div>
                </div>
            </main>
        );
    }

    componentDidMount = () => {
        const username = window.location.pathname.slice(1);
        fetch(`${API_URL}/api/public-stream-data/${username}`).then(data => data.json()).then((data: any) => {
            if (!data) return console.error(`[ERROR]: Streamer Not Found.`);
        });
    }
}

export default hot(module)(Streamer);
