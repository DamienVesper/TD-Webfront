import React from 'react';
import { hot } from 'react-hot-loader';

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
                            <img src="/assets/img/header-logo.png" alt="Throwdown.TV logo" className="navbar-brand header-logo" />
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
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" id="profile-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
                                    <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
                                        <li>
                                            <a href="/settings" className="dropdown-item">
                                                <i className="icofont icofont-gear"></i>
                                                Settings
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a href="/auth/logout" className="dropdown-item">
                                                <i className="icofont icofont-logout"></i>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="/tos" className={`nav-link ${window.location.pathname === `/tos` ? `active disabled` : ``}`}>ToS</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/staff" className={`nav-link ${window.location.pathname === `/staff` ? `active disabled` : ``}`}>Our Staff</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://discord.throwdown.tv/" target="_blank" rel="noreferrer" className="nav-link">Discord</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default hot(module)(Header);
