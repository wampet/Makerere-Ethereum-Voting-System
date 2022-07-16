import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          Please check out{" "}
          <a
            className="profile"
            href="https://www.mak.ac.ug/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Makerere University
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wamanga Peter and Andrew
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
