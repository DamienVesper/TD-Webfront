import React from 'react';
import { hot } from 'react-hot-loader';

import $ from 'jquery';
import HCaptcha from '@hcaptcha/react-hcaptcha';

declare const API_URL: string;

/**
 * Helper function to setup login page.
 */
$(() => {
    $(`#login-error`).hide();
    $(`#login-success`).hide();

    $(`#login-button`).on(`click`, e => {
        e.preventDefault();

        $(`#login-button`).attr(`disabled`, `true`);
        $(`#login-error`).hide();
        $(`#login-success`).hide();

        $.ajax({
            type: `post`,
            url: `${API_URL}/auth/login`,
            data: $(`#login-form`).serialize()
        }).then(res => {
            if (res.errors) {
                $(`#login-button`).attr(`disabled`, `false`);
                $(`#login-error`).show();

                // This needs a re-implementation.
                // hcaptcha.reset();

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
});

/**
 * The login page.
 */
class Login extends React.Component {
    render = () => {
        return (
            <main>
                <div className="container">
                    <h1 className="text-center my-5">Log In</h1>
                    <div className="card card-body text-dark">
                        <form action="/auth/login" method="POST" id="login-form">
                            <div id="login-error" className="alert alert-danger alert-dismissible fade show" role="alert">
                                <span id="login-error-message"></span>
                            </div>
                            <div id="login-success" className="alert alert-success alert-dismissible fade show" role="alert">
                                <span id="login-success-message"></span>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="username" name="login-username" className="form-control mb-3" placeholder="Enter Username" autoComplete="username" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="login-password" className="form-control mb-3" placeholder="Enter Password" autoComplete="new-password" required />
                            </div>
                            <div className="form-group mb-3">
                                <a href="/forgot">Forgot Password?</a>
                            </div>

                            <HCaptcha sitekey="b5bed0d5-a077-493d-9ae0-3a66e4d05a6c" />

                            <div className="d-grid gap-2 mt-3">
                                <input type="submit" value="Login" id="login-button" className="btn btn-primary btn-block" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

export default hot(module)(Login);
