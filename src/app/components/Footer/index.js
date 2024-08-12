// src/app/components/Footer/index.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ sherin, rishana }) => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#about">About Myntra</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#careers">Careers</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#help">Help</a></li>
                        <li><a href="#returns">Returns</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect with Us</h3>
                    <ul className="social-media">
                        <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
                        <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                        <li><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#terms">Terms & Conditions</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{sherin}</p>
                <p>{rishana}</p>
            </div>
        </footer>
    );
};

export default Footer;
