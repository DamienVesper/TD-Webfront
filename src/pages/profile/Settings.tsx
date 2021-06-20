import React from 'react';
import { hot } from 'react-hot-loader';

// import $ from 'jquery';

import '../../../public/assets/scss/pages/settings.scss';

/**
 * The settings page.
 */
class Dashboard extends React.Component {
    render = () => {
        return (
            <main className="mx-5">
                <h1 className="text-center my-5">Settings</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-body text-dark my-4">
                            <h2 className="text-center my-3">Display Name</h2>
                            <form action="/settings/display-name" method="POST" id="account-options-form">
                                <div className="form-group">
                                    <label htmlFor="display-name" className="form-label">Display Name</label>
                                    <input type="text" id="display-name" name="display-name" className="form-control" placeholder="Change display name" maxLength={20} />
                                    <span className="form-text text-dark">You may only change the capitalization, not the actual spelling.</span>
                                </div>
                                <input type="submit" id="account-update-info" value="Update Display Name" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div>
                        <div className="card card-body text-dark my-4">
                            <h2 className="text-center my-3">Notifications</h2>
                            <form action="/settings/email-notifications" method="POST" id="account-generaloptions-form">
                                <div className="form-check form-switch">
                                    <input type="checkbox" className="form-check-input" id="allow-notifications" name="allow-notifications" checked />
                                    <label htmlFor="allow-notifications" className="form-check-label">Email Notifications</label>
                                </div>

                                <input type="submit" id="notification-settings-btn" name="notification-settings-btn" value="Update Notification Settings" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card card-body text-dark my-4">
                            <h2 className="text-center my-3">Avatar</h2>
                            <div className="avatar-preview mx-auto my-4">
                                <img src="/assets/img/defaultpfp.png" alt="Avatar" className="avatar-preview profile-picture rounded" />
                            </div>
                            <form action="/settings/update-avatar" method="POST" id="account-avatar-form">
                                <div className="form-group">
                                    <label htmlFor="profile-picture" className="form-label">Profile Avatar URL</label>
                                    <input type="text" id="display-avatar" name="display-avatar" className="form-control" placeholder="Avatar Image URL" maxLength={1000} />
                                    <span className="form-text text-dark">(Example: https://domain.com/image.png|.jpg|.gif)</span>
                                </div>
                                <input type="submit" name="account-avatar-form" id="account-update-pfp" value="Update Profile Picture" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-body text-dark">
                            <a type="button" href="/auth/reset" className="btn btn-primary">Reset Password</a>
                            <a type="button" href="/auth/delete" className="btn btn-danger mt-2">Delete Account</a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default hot(module)(Dashboard);
