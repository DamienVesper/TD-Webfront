import React from 'react';
import { hot } from 'react-hot-loader';

import $ from 'jquery';
import HCaptcha from '@hcaptcha/react-hcaptcha';

/**
 * Helper function to setup login page.
 */
const setupLogin = () => {
    $(document).ready(() => {
        $(`#login-error`).hide();
        $(`#login-success`).hide();
    });

    $(`#login-button`).on(`click`, e => {
        e.preventDefault();

        $(`#login-button`).attr(`disabled`, `true`);
        $(`#login-error`).hide();
        $(`#login-success`).hide();

        $.ajax({
            type: `post`,
            url: `/login`,
            data: $(`#login-form`).serialize()
        }).then(res => {
            if (res.errors) {
                $(`#login-button`).attr(`disabled`, `false`);
                $(`#login-error`).show();

                $(`#login-error-message`).text(res.errors);
                console.error(`[ACCOUNT SERVER]: ${JSON.stringify(res.errors)}`);
            } else if (res.success) {
                $(`#login-button`).val(`Logged in, redirecting...`);
                $(`#login-success`).show();

                $(`#login-success-message`).text(res.success);
                console.log(`[ACCOUNT SERVER]: ${JSON.stringify(res.success)}`);

                window.location.reload();
            }
        });
    });
};

/**
 * The login page.
 */
class Login extends React.Component {
    render = () => {
        return (
            <main>
                <div className="container w-50 mt-5">
                    <div className="card card-body text-dark">
                        <h1 className="text-center">Log In</h1>
                        <form action="/login" method="POST" id="login-form">
                            <div id="login-error" className="alert alert-danger alert-dismissible fade show" role="alert">
                                <span id="login-error-message"></span>
                            </div>
                            <div id="login-success" className="alert alert-success alert-dismissible fade show" role="alert">
                                <span id="login-success-message"></span>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="username">Username</label>
                                <input type="username" name="login-username" className="form-control mb-3" placeholder="Enter Username" autoComplete="username" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="login-password" className="form-control mb-3" placeholder="Enter Password" autoComplete="new-password" required />
                            </div>
                            <div className="form-group mb-3">
                                <a href="/forgot">Forgot Password?</a>
                            </div>

                            <HCaptcha sitekey="b5bed0d5-a077-493d-9ae0-3a66e4d05a6c" />
                            <br />

                            <input type="submit" id="login-button" value="Login" className="btn btn-primary btn-block" />
                        </form>
                    </div>
                </div>
                {setupLogin()}
            </main>
        );
    }
}

export default hot(module)(Login);
