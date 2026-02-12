

const Logos = () => {
  const logos = [
    { name: "Toyota", src: "/assets/trusted-logos/logo-toyota.svg" },
    { name: "HMTX", src: "/assets/trusted-logos/hmtx.svg" },
    { name: "Deloitte", src: "/assets/trusted-logos/logo-deloitte.svg" },
    { name: "AMD", src: "/assets/trusted-logos/logo-amd.svg" },
    { name: "Foxconn", src: "/assets/trusted-logos/logo-foxconn.svg" },
    { name: "Intel", src: "/assets/trusted-logos/logo-intel.svg" },
    { name: "OmniAb", src: "/assets/trusted-logos/logo-omniab.svg" },
  ];

  const displayLogos = [...logos, ...logos];

  return (
    <section className="logos-section">
      <div className="container">
        {/* Updated Title Structure */}
        <h4 className="logos-title text-uppercase text-center">
          Trusted By
        </h4>

        <div className="logo-slider">
          <div className="logo-track">
            {displayLogos.map((logo, index) => (
              <div className="logo-item" key={index}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="logo-svg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;