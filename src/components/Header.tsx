import React from 'react';
import { hot } from 'react-hot-loader';

import $ from 'jquery';

import Logo from '../../public/assets/img/header-logo.png';

declare const API_URL: string;

/**
 * The header to appear at the top of every page.
 */
class Header extends React.Component {
    render = () => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a href="/" className={window.location.href === `/` ? `disabled` : ``}>
                            <img src={Logo} alt="Throwdown.TV logo" className="navbar-brand header-logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="/browse" className={`nav-link ${window.location.pathname === `/browse` ? `active disabled` : ``}`}>Browse</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/following" className={`nav-link ${window.location.pathname === `/following` ? `active disabled` : ``}`}>Following</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="/tos" className={`nav-link ${window.location.pathname === `/tos` ? `active disabled` : ``}`}>ToS</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/privacy-policy" className={`nav-link ${window.location.pathname === `/privacy-policy` ? `active disabled` : ``}`}>Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://discord.throwdown.tv/" target="_blank" rel="noreferrer" className="nav-link">Discord</a>
                                </li>
                                <li className="nav-item dropdown nav-profile-menu">
                                    <a href="#" className="nav-link btn" id="profile-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="icofont icofont-user-alt-7"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile-dropdown">
                                        <li>
                                            <a href="#" className="dropdown-item profile-settings-opt">
                                                <i className="icofont icofont-people"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a href="/vip" className="dropdown-item profile-get-vip-opt">
                                                <i className="icofont icofont-diamond"></i>
                                                Get VIP
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a href="/dashboard" className="dropdown-item profile-settings-opt">
                                                <i className="icofont icofont-dashboard"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/settings" className="dropdown-item profile-settings-opt">
                                                <i className="icofont icofont-gear"></i>
                                                Settings
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a href="/auth/logout" className="dropdown-item profile-logout-opt">
                                                <i className="icofont icofont-logout"></i>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="auth-btn-wrapper d-none">
                                <a href="/auth/login" className="nav-link btn btn-success me-2">Login</a>
                                <a href="/auth/signup" className="nav-link btn btn-primary">Sign Up</a>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

    componentDidMount = () => {
        fetch(`${API_URL}/auth/authenticated`).then(data => data.json()).then((data: any) => {
            if (data.isLoggedIn) {
                $(`.nav-profile-menu`).removeClass(`d-none`).addClass(`d-flex`);
                $(`.profile-settings-opt`).attr(`href`, `/${data.username}`);
            } else {
                $(`.auth-btn-wrapper`).removeClass(`d-none`).addClass(`d-flex`);
            }
        });
    }
}

export default hot(module)(Header);
