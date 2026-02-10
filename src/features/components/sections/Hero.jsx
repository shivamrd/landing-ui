const Hero = () => {
  return (
   <section className="hero-section d-flex align-items-center">
        <div className="container text-center hero-wrapper">

          {/* SMALL TOP LINE */}
          <p className="hero-topline">
            Turn Any Document Into
          </p>

          {/* MAIN HEADING */}
          <h1 className="hero-title">
            Actionable <span className="gradient-text">Intelligence</span>
          </h1>

          {/* SUB TEXT */}
          <p className="hero-subtitle mt-4">
            Turn complex, real-world documents into reliable, structured data—
            with accuracy, full auditability, and zero training required.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons mt-5">
            <button className="btn btn-primary hero-btn-primary">
              Start for Free
            </button>
            <button className="btn btn-outline-light hero-btn-secondary">
              Talk to an Expert
            </button>
          </div>

        </div>
      </section>
  );
};

export default Hero;
