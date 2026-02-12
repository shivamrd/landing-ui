import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
    <div className="container-fluid px-4">


       <a className="navbar-brand fw-semibold fs-4 d-flex align-items-center" href="#">
  <span className="bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center me-2"
        style={{ width: "40px", height: "40px", fontWeight: "bold" }}>
    T
  </span>
  Techno<span className="text-primary">Hunk</span>
</a>


        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            {/* ================= INDUSTRIES ================= */}
            <li className="nav-item dropdown landing-dropdown">
              <a
                className="nav-link dropdown-toggle landing-nav-link"
                href="#"
                id="industriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industries
              </a>

              <ul
                className="dropdown-menu landing-menu"
                aria-labelledby="industriesDropdown"
              >
                <li className="dropdown-header">SOLUTIONS</li>

                <li>
                  <a className="landing-item" href="#finance">
                    <span className="menu-icon">🏦</span>
                    <div>
                      <div className="menu-title">
                        Agentic Document Extraction in Finance
                      </div>
                      <div className="menu-desc">
                        Turn financial documents into structured insights
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="landing-item" href="#health">
                    <span className="menu-icon">🏥</span>
                    <div>
                      <div className="menu-title">
                        Agentic Document Extraction in Healthcare
                      </div>
                      <div className="menu-desc">
                        Automate patient intake & medical forms
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
            </li>


            {/* ================= RESOURCES ================= */}
            <li className="nav-item dropdown landing-dropdown">
              <a
                className="nav-link dropdown-toggle landing-nav-link"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>

              <ul
                className="dropdown-menu landing-menu-resources"
                aria-labelledby="resourcesDropdown"
              >
                <li className="dropdown-header">RESOURCES</li>

                <li><a className="landing-simple-item" href="#docs">📘 Docs</a></li>
                <li><a className="landing-simple-item" href="#blogs">📰 Blogs</a></li>
                <li><a className="landing-simple-item" href="#webinars">🎤 Webinars</a></li>
                <li><a className="landing-simple-item" href="#trust">🔒 Trust Center</a></li>
                <li><a className="landing-simple-item" href="#builder">👨‍💻 Become a Builder</a></li>
                <li><a className="landing-simple-item" href="#discord">💬 Discord</a></li>

              </ul>
            </li>


            {/* ================= PRICING ================= */}
            <li className="nav-item">
              <a className="nav-link landing-nav-link" href="#pricing">
                Pricing
              </a>
            </li>


            {/* ================= COMPANY ================= */}
            <li className="nav-item dropdown landing-dropdown">
              <a
                className="nav-link dropdown-toggle landing-nav-link"
                href="#"
                id="companyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>

              <ul
                className="dropdown-menu landing-menu-company"
                aria-labelledby="companyDropdown"
              >
                <li className="dropdown-header">COMPANY</li>

                <li><a className="landing-simple-item" href="#about">ℹ️ About Us</a></li>
                <li><a className="landing-simple-item" href="#careers">🚀 Careers</a></li>
                {/* <li><a className="landing-simple-item" href="#contact">📞 Contact Us</a></li> */}
                <li><Link to="/contact-us" className="landing-simple-item" href="#contact">📞 Contact Us</Link></li>
                
              </ul>
            </li>

          </ul>

          {/* ================= RIGHT BUTTONS ================= */}
          <div className="d-flex gap-3">
            
            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
            <button className="btn btn-outline-light">Get in Touch</button>
            <button className="btn btn-primary landing-btn">
              Start for Free
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

