import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo-section">
          <h2 className="footer-logo"> <span>News</span>Web</h2>
          <p className="footer-text">
            Stay updated with the latest breaking news from around the world.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">World</a></li>
            <li><a href="/">Technology</a></li>
            <li><a href="/">Sports</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow <span>Us</span> </h3>

        <div className="social-icons">
            <a href="/" className="facebook">
                <FaFacebook />
            </a>

            <a href="/" className="instagram">
                <FaInstagram />
            </a>

            <a href="/" className="twitter">
                <FaTwitter />
            </a>

            <a href="/" className="youtube">
                <FaYoutube />
            </a>
        </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 NewsWeb. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;