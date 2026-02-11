// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
//       <div className="container">
//         {/* Logo */}        <a className="navbar-brand fw-semibold fs-4" href="#">
//           Techno<span className="text-primary">Hunk</span>
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navMenu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navMenu">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//                 Industries
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//                 Resources
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Pricing</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//                 Company
//               </a>
//             </li>
//           </ul>

//           <div className="d-flex gap-3">
//             <a className="btn btn-outline-light" href="#">Login</a>
//             <button className="btn btn-outline-light">Get in Touch</button>
//             <button className="btn btn-primary landing-btn">Start for Free</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-semibold fs-4" href="#">
          Techno<span className="text-primary">Hunk</span>
        </a>

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
            {/* Industries Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="industriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industries
              </a>
              <ul className="dropdown-menu" aria-labelledby="industriesDropdown">
                <li>
                  <a className="dropdown-item" href="#tech">Tech</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#finance">Finance</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#health">Health</a>
                </li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <a className="dropdown-item" href="#docs">Docs</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#blogs">Blogs</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#webinars & event">Webinars & Events</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#become a builder">Become a Builder</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#trust center">Trust Center</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#discord">Discord</a>
                </li>
              </ul>
            </li>

            {/* Single Link */}
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>

            {/* Company Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="companyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="companyDropdown">
                <li>
                  <a className="dropdown-item" href="#about">About Us</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#careers">Careers</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#contact">Contact</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex gap-3">
            <a className="btn btn-outline-light" href="#login">Login</a>
            <button className="btn btn-outline-light">Get in Touch</button>
            <button className="btn btn-primary landing-btn">Start for Free</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
