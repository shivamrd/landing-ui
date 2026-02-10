// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Product */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-uppercase">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-light text-decoration-none">LandingLens</a></li>
              <li><a href="#" className="text-light text-decoration-none">Snowflake Native Apps</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-uppercase">Industries</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Financial Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Insurance</a></li>
              <li><a href="#" className="text-light text-decoration-none">Healthcare</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-uppercase">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Docs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Webinars</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-uppercase">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-uppercase">Developers</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">GitHub</a></li>
              <li><a href="#" className="text-light text-decoration-none">Python Library</a></li>
              <li><a href="#" className="text-light text-decoration-none">Discord</a></li>
            </ul>
          </div>

        </div>

        <hr className="bg-secondary" />

        {/* Bottom copyright & social */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <small>© LandingAI. All Rights Reserved 2026</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="https://twitter.com" className="text-light me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-light me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com" className="text-light me-3">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://youtube.com" className="text-light">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
