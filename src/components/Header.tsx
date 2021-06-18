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
                                    <a href="/browse" className={`nav-link ${window.location.pathname === `/browse` ? `active disabled` : ``}`}>Browse</a>
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
