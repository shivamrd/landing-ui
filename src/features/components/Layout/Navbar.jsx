// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
//       <div className="container">
//         {/* Logo */}
//         <a className="navbar-brand fw-semibold fs-4" href="#">
//           Techno<span className="text-primary">Hunk</span>
//         </a>

//         {/* Mobile Toggle */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#landingNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Nav Links */}
//         <div className="collapse navbar-collapse" id="landingNavbar">
//           <ul className="navbar-nav mx-auto gap-lg-4">
//             <li className="nav-item">
//               <a className="nav-link nav-link-custom" href="#">
//                 Product
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link nav-link-custom" href="#">
//                 Solutions
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link nav-link-custom" href="#">
//                 Resources
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link nav-link-custom" href="#">
//                 Company
//               </a>
//             </li>
//           </ul>

//           {/* CTA */}
//           <div className="d-flex">
//             <a href="#" className="btn btn-outline-light btn-rounded">
//               Get a demo
//             </a>
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
        {/* Logo */}        <a className="navbar-brand fw-semibold fs-4" href="#">
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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Industries
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Company
              </a>
            </li>
          </ul>

          <div className="d-flex gap-3">
            <a className="btn btn-outline-light" href="#">Login</a>
            <button className="btn btn-outline-light">Get in Touch</button>
            <button className="btn btn-primary landing-btn">Start for Free</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
