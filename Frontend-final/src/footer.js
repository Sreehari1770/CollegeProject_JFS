import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>BUILT BETTER FURNITURE</h3>
      <div className="footer__social">
        <a href="https://www.facebook.com" className="footer_social-icon">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" className="footer_social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" className="footer_social-icon">
          <FaInstagram />
        </a>
      </div>
      <p id='txt'>
        &copy; 2023 Your Built better Furniture Store. All rights reserved. | 
        <a href="/privacy-policy" className="footer_link">Privacy Policy</a> | 
        <a href="/terms-of-service" className="footer_link">Terms of Service</a> |
        <a href="/aboutus" className="footer_link">About us</a> |
        <a href="/contactus" className="footer_link">Contact us</a> 
      </p>
    </footer>
  );
};

export default Footer;