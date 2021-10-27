import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <a
        className="footer__link"
        href="https://github.com/miguelcoria94/movie-app-interview-miguel"
        target="_blank"
        rel="noreferrer"
      >
        <span className="fab fa-github"></span> GitHub Repo
      </a>
      <a
        className="footer__link"
        href="https://www.linkedin.com/in/miguel-coria-273888130/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="fab fa-linkedin"></span> LinkedIn Profile
      </a>
    </div>
  );
}

export default Footer;
