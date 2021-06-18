import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * Render account buttons based on current authentication state.
 * @returns JSX representation of account button list.
 */
const accountButtons = () => {
    const loginBtns = () => {
        return (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a href="/auth/login" className="btn btn-block btn-success my-2 my-sm-0">Login</a>
                </li>
                <li className="nav-item">
                    <a href="/auth/login" className="btn btn-block btn-success my-2 my-sm-0">Signup</a>
                </li>
            </ul>
        );
    };

    fetch(`https://throwdown.tv/authenticated`).then(data => data.json()).then(data => {
        return data.json.isLoggedIn
            ? (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="/auth/login" className="btn btn-block btn-success my-2 my-sm-0">Logout</a>
                    </li>
                </ul>
            )
            : loginBtns();
    }).catch(err => {
        // Handle the error.
        console.log(err);

        // Assume the state to be logged out.
        return loginBtns();
    });
};

/**
 * The header to appear at the top of every page.
 */
class Header extends React.Component {
    render = () => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a href="/">
                            <img src="/assets/img/header-logo.png" alt="Throwdown.TV logo" className="navbar-brand header-logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="/" className={`nav-link ${window.location.pathname === `/` ? `active disabled` : ``}`}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/browse" className={`nav-link ${window.location.pathname === `/browse` ? `active disabled` : ``}`}>Browse</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/dashboard" className={`nav-link ${window.location.pathname === `/dashboard` ? `active disabled` : ``}`}>Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/tos" className={`nav-link ${window.location.pathname === `/tos` ? `active disabled` : ``}`}>ToS</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/staff" className={`nav-link ${window.location.pathname === `/staff` ? `active disabled` : ``}`}>Our Staff</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/discord" className="nav-link">Discord</a>
                                </li>
                            </ul>
                            {accountButtons()}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default hot(module)(Header);
