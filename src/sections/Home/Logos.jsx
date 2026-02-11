const Logos = () => {
  return (
    <section className=" text-white logos-section">
      <div className="container text-center">
        <p className="text-uppercase  small mb-4" >
          Trusted by industry leaders
        </p>

        <div className="row justify-content-center align-items-center g-4">
          <div className="col-6 col-md-2">
            <div className="logo-item">BMW</div>
          </div>
          <div className="col-6 col-md-2">
            <div className="logo-item">INTEL</div>
          </div>
          <div className="col-6 col-md-2">
            <div className="logo-item">foxcon</div>
          </div>
          <div className="col-6 col-md-2">
           <div className="logo-item">SAMSUNG</div>
          </div>
          <div className="col-6 col-md-2">
           <div className="logo-item">NVDIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
