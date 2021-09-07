import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer__email">
                <h4>Email</h4>
                <p>maximsheleh@gmail.com</p>
            </div>
            <div className="footer__phone">
                <h4>Phone</h4>
                <p>8-029-3844349</p>
            </div>
            <div className="footer__links">
                <h4>Follow me</h4>
                <a className="footer__links_link" href="https://join.skype.com/invite/ndIKxwphKZNh" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSkype} />
                </a>
                <a className="footer__links_link" href="https://www.linkedin.com/in/maxim-sheleh-65a23b1a4/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            <div className="footer__text">
                <p>
                </p>
            </div>
            
        </footer>
    );
};

export default Footer;