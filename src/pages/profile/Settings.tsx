import React from 'react';
import { hot } from 'react-hot-loader';

// import $ from 'jquery';

/**
 * The settings page.
 */
class Dashboard extends React.Component {
    render = () => {
        return (
            <main>
                <div className="card card-body text-dark">
                    <h2 className="text-center">Account Settings</h2>
                    <label htmlFor="display-name">Current Username: <span id="current-username"></span></label>
                    <label htmlFor="display-name">Account Status: <span id="current-account-status"></span></label>
                    <form action="/accountoptions/displayname" method="post" id="account-options-form">
                        <div className="form-group">
                            <label htmlFor="display-name">Display Name <span>(You may only change the Capitalization)</span></label>
                            <input type="text" id="display-name" name="display-name" className="form-control"
                                placeholder="Change name Capitalization" maxLength={80} />
                            <br />
                            <input type="submit" id="account-update-info" value="Update Display Name"
                                className="btn btn-primary btn-block" />
                        </div>
                    </form>
                    <br />
                    <h3 className="text-center">General Settings</h3>
                    <form action="/accountoptions/generaloptions" method="post" id="account-generaloptions-form">
                        <label className="switch">
                            <input type="checkbox" id="allow-notifications" name="allow-notifications" value="true" />
                            <span className="slider round"></span>
                        </label>
                        <label htmlFor="allow-notifications">Email Notifications</label>
                        <input type="submit" name="account-generaloptions-form" id="account-generaloptions-update" value="Update General Settings"
                            className="btn btn-primary btn-block" />
                    </form>
                    <br />
                    <form action="/accountoptions/updatepfp" method="post" id="account-pfp-form">
                        <div className="form-group">
                            <label htmlFor="profilepicture">Profile Avatar URL <span>(Example: https://domain.com/image.png|.jpg|.gif)</span></label>
                            <input type="text" id="display-avatar" name="display-avatar" className="form-control"
                                placeholder="Avatar Image URL" maxLength={1000} />
                            <br />
                            <input type="submit" name="account-pfp-form" id="account-update-pfp" value="Update Profile Picture"
                                className="btn btn-primary btn-block" />
                        </div>
                        <div>
                            <p>Current Avatar:</p>
                            <div className="profile-picture-cropper">
                                <img src="/assets/img/defaultpfp.png" id="current-display-avatar" className="profile-picture rounded" alt="Avatar" />
                            </div>
                        </div>
                    </form>
                    <br />
                    <a type="button" href="/recoveraccount" className="btn btn-warning">Reset Password</a>
                    <br />
                    <a type="button" href="/deleteaccount" className="btn btn-danger">Delete Account</a>
                </div>
                <br />
            </main>
        );
    }
}

export default hot(module)(Dashboard);
