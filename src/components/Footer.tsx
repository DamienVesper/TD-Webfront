import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/components/footer.scss';

/**
 * A footer to be displayed on every page.
 */
class Footer extends React.Component {
    render = () => {
        return (
            <footer className="footer mt-auto py-3">
                <div className="container text-center">
                    <span>&copy; Throwdown Media</span>
                </div>
            </footer>
        );
    }
}

export default hot(module)(Footer);
