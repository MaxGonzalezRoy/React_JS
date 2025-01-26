// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
        <p>© 2025 Mi Tienda. Todos los derechos reservados.</p>
        <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </div>
        </footer>
    );
}

export default Footer;