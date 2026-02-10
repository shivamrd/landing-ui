const Logos = () => {
  return (
    <section className=" text-white logos-section">
      <div className="container text-center">
        <p className="text-uppercase text-muted small mb-4" >
          Trusted by industry leaders
        </p>

        <div className="row justify-content-center align-items-center g-4">
          <div className="col-6 col-md-2">
            <span className="logo-text">BMW</span>
          </div>
          <div className="col-6 col-md-2">
            <span className="logo-text">Intel</span>
          </div>
          <div className="col-6 col-md-2">
            <span className="logo-text">Foxconn</span>
          </div>
          <div className="col-6 col-md-2">
            <span className="logo-text">Samsung</span>
          </div>
          <div className="col-6 col-md-2">
            <span className="logo-text">NVIDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
