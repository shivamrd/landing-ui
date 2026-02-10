const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Left side: Logo & Info */}
          <div className="col-12 col-md-4 mb-4 text-center text-md-start">
             <a className="navbar-brand fw-semibold fs-4" href="#">
          Techno<span className="text-primary">Hunk</span>
        </a>
            <p className="footer-tagline">
              Artificial Intelligence Solutions for Businesses
            </p>
            <p className="footer-description">
              LandingAI’s cutting-edge software platform makes computer vision easy for a wide range of applications across all industries
            </p>
            <p className="footer-contact mb-0">
              <strong>Headquarters:</strong><br />
              400 Castro St., Suite 600,<br />
              Mountain View, CA 94041<br />
              <a href="mailto:support@landing.ai">support@landing.ai</a>
            </p>
          </div>

          {/* Right side: Link columns */}
          <div className="col-12 col-md-8">
            <div className="row">

              {/* Product */}
              <div className="col-6 col-md-3 mb-4">
                <h6 className="footer-title">Product</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#">LandingLens</a></li>
                  <li><a href="#">Agentic Document Extraction</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>

              {/* Industries */}
              <div className="col-6 col-md-3 mb-4">
                <h6 className="footer-title">Industries</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#">Healthcare</a></li>
                  <li><a href="#">Financial Services</a></li>
                  <li><a href="#">Logistics</a></li>
                  <li><a href="#">Legal</a></li>
                  <li><a href="#">Insurance</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="col-6 col-md-3 mb-4">
                <h6 className="footer-title">Resources</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#">Docs</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Webinars</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-6 col-md-3 mb-4">
                <h6 className="footer-title">Company</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        <hr className="bg-secondary" />

        {/* Bottom copyright & social */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <small>© LandingAI. All Rights Reserved 2026</small>
          </div>
          <div className="col-md-6 text-center text-md-end footer-social">
            <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
            <a href="https://linkedin.com"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com"><i className="bi bi-github"></i></a>
            <a href="https://youtube.com"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
