import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * The page listing the Terms of Service.
 */
class ToS extends React.Component {
    render = () => {
        return (
            <main>
                <div className="text-center my-5">
                    <h1>Terms of Service</h1>
                    <p>Last updated: June 19, 2021</p>
                </div>

                <div className="container">
                    <div className="card card-body text-dark">
                        <p>The minimum age to broadcast on Throwdown.TV is <strong>13</strong>.</p>
                        <p>Voluntarily broadcasting <strong>NSFW</strong> / <strong>NSFL</strong> is prohibited.</p>

                        <p>This includes:</p>
                        <ul>
                            <li>Pornography (Live action and animated).</li>
                            <li>Nudity (any participant on broadcast exposing themselves).</li>
                            <li>Gore (any visual content involving blood / injury / death).</li>
                            <li>Disgusting content (including and not limited to scat, vomit, and any other bodily fluids).</li>
                        </ul>
                        <p>The only exception to this is video game nudity / gore; however, games deemed to be dedicatedly NSFW are not allowed.</p>

                        <hr />

                        <p>No condoning or performing illegal activity on broadcast. You must follow the laws within your region.</p>
                        <ul>
                            <li>Cyber crimes (doxxing, swatting, hacking, etc).</li>
                            <li>Encouraging child abuse (physical / sexual).</li>
                            <li>Threats of serious harm.</li>
                        </ul>

                        <hr />

                        <p>We do not platform predators or sex offenders. Regardless of conviction status, if there is evidence of predatory behavior / actions or a criminal record, you will not be allowed to have a platform.</p>

                        <p>Illegal behavior includes, but is not limited to:</p>
                        <ul>
                            <li>Child abuse / predatory behavior towards minors (physical / verbal / mental abuse).</li>
                            <li>Sexual assault / battery.</li>
                        </ul>

                        <hr />

                        <p>Do not stream dedicated broadcasts for copyrighted material.</p>
                        <p>This includes:</p>

                        <ul>
                            <li>Movies.</li>
                            <li>TV shows.</li>
                            <li>Copyrighted music.</li>
                        </ul>

                        <hr />

                        <p>Do not post private information. Information private to oneself does not count. Contact us via <a href="https://discord.me/throwdowntv">Discord</a> to file a privacy complaint.</p>
                        <p>Do not create new/alternative accounts to get around a suspension.</p>
                        <p>Name farming is not allowed.</p>

                        <hr />

                        <p>We at Throwdown.TV and its parent company do not endorse anything aired / said by the users / streamers on this website. We are merely a platform for free speech, not a publisher.</p>
                        <p>We also reserve the right to change the Terms of Service at will.</p>
                    </div>
                </div>
                <br />
            </main>
        );
    }
}

export default hot(module)(ToS);
