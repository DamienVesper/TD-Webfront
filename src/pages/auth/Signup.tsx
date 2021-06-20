import React from 'react';
import { hot } from 'react-hot-loader';

import $ from 'jquery';
import HCaptcha from '@hcaptcha/react-hcaptcha';

declare const API_URL: string;

/**
 * The signup page.
 */
class Signup extends React.Component {
    render = () => {
        return (
            <main>
                <div className="container mt-5">
                    <h1 className="text-center my-5">Sign Up</h1>
                    <div className="card card-body text-dark">
                        <form action="/auth/signup" method="POST" id="signup-form">
                            <div id="signup-error" className="alert alert-danger alert-dismissible fade show" role="alert">
                                <span id="signup-error-message"></span>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="username" name="signup-username" id="username" className="form-control mb-3" placeholder="Username" autoComplete="username" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="signup-email" id="email" className="form-control mb-3" placeholder="Email" autoComplete="email" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="signup-password" id="password" className="form-control mb-3" placeholder="Password" autoComplete="new-password" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <input type="password" name="signup-password-confirm" id="confirm-password" className="form-control mb-3" placeholder="Confirm Password" autoComplete="confirm-password" required />
                            </div>

                            <HCaptcha sitekey="b5bed0d5-a077-493d-9ae0-3a66e4d05a6c" />

                            <div className="d-grid gap-2 mt-3">
                                <input type="submit" value="Submit" id="signup-button" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    componentDidMount = () => {
        $(`#signup-error`).hide();

        $(`#signup-button`).on(`click`, e => {
            e.preventDefault();

            $(`#signup-button`).attr(`disabled`, `true`);
            $(`#signup-error`).hide();

            $.ajax({
                type: `post`,
                url: `${API_URL}/auth/signup`,
                data: $(`#signup-form`).serialize()
            }).then(res => {
                if (res.errors) {
                    $(`#signup-button`).attr(`disabled`, `false`);
                    $(`#signup-error`).show();

                    // This needs a re-implementation.
                    // hcaptcha.reset();

                    $(`#signup-error-message`).text(res.errors);
                    console.error(`[ACCOUNT SERVER]: ${JSON.stringify(res.errors)}`);
                } else if (res.success) {
                    $(`#signup-button`).attr(`disabled`, `true`);
                    $(`#signup-error`).show();

                    $(`#signup-error-message`).text(res.success);
                    console.log(`[ACCOUNT SERVER]: ${JSON.stringify(res.success)}`);

                    setTimeout(() => {
                        window.location.href = `${window.location.protocol}//${window.location.host}/auth/login`;
                    }, 1e4);
                }
            });
        });
    }
}

export default hot(module)(Signup);
