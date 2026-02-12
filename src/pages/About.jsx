import MainLayout from "../Layout/MainLayout";
import craftingIcon from "/assets/images/CraftingDigitalWorldWithAI.svg";
import person from "/assets/images/images.webp";

const About = () => {
  const techStacks = [
    "Java Experts",
    "AI & ML Innovators",
    "Python Specialists",
    "ReactJS Developers",
    "Generative AI Pioneers",
  ];

  // TODO Fix display issue icons for principles
  const principles = [
    {
      title: "Crafting Digital World With AI",
      icon: craftingIcon,
      type: "image",
    },
    { title: "Redefining Growth", icon: "bi-graph-up-arrow" },
    { title: "Technology That Powers", icon: "bi-lightning-charge" },
    { title: "Intelligent Systems That Scale", icon: "bi-diagram-3" },
    { title: "Innovative Minds", icon: "bi-lightbulb" },
    { title: "Next-Level IT", icon: "bi-layers" },
    { title: "Future-Ready Transformation", icon: "bi-rocket-takeoff" },
    { title: "Robust & Maintainable IT", icon: "bi-shield-check" },
  ];

  const leaders = [
    { name: "Nagendra Kumar Yadav", role: "Founder & CEO", img: person },
    { name: "Prabhat Kumar", role: "Project Manager", img: person },
    { name: "Aditya Kumar", role: "Full Stack Developer", img: person },
  ];

  return (
    <MainLayout>
      <div className="bg-white overflow-hidden">
        {/* HERO */}
        <header className="about-hero-section text-white text-center">
          <div className="container position-relative py-5">
            <span className="badge bg-primary px-3 py-2 mb-3">
              About Technohunk
            </span>
            <h1 className="display-3 fw-bold mt-3">
              Passion for Tech.
              <br /> Commitment to You.
            </h1>
            <p
              className="lead opacity-75 mt-4 mx-auto"
              style={{ maxWidth: 720 }}
            >
              We transform ideas into intelligent, scalable digital products
              using AI, modern engineering, and innovation-first thinking.
            </p>
          </div>
        </header>

        {/* MARQUEE */}
        <div className="about-tech-marquee py-3">
          <div className="about-marquee-track">
            {[...techStacks, ...techStacks].map((tech, i) => (
              <span key={i} className="mx-5 fw-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* IMPACT */}
        <section className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold display-6 mb-3">
                Impact Through Intelligent Innovation
              </h2>
              <p className="text-muted">
                We build future-proof platforms using AI, Python, Java, and
                cloud-native technologies that scale with your business.
              </p>

              <div className="row mt-4 g-3">
                {[
                  { num: "25+", label: "Services" },
                  { num: "50+", label: "Projects" },
                  { num: "99%", label: "Client Satisfaction" },
                ].map((s, i) => (
                  <div key={i} className="col-4">
                    <div className="about-stat-card text-center">
                      <h3 className="fw-bold text-primary">{s.num}</h3>
                      <small className="text-muted">{s.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="about-glass-card p-5">
                <i className="bi bi-stars fs-1 text-primary"></i>
                <p className="mt-3 text-muted">
                  “We design intelligent systems that are secure, maintainable,
                  and ready for tomorrow’s challenges.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="bg-light py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Our Core Focus</h2>
            <div className="row g-4">
              {principles.map((p, i) => (
                <div key={i} className="col-md-3 col-sm-6">
                  <div className="about-focus-card text-center">
                    <div className="about-icon-wrap mb-3">
                      <i className={`bi ${p.icon}`}></i>
                    </div>
                    <h6 className="fw-semibold">{p.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERS */}
        <section className="container py-5 text-center">
          <h2 className="fw-bold mb-2">Creative Members</h2>
          <p className="text-muted mb-5">Smart people. Bold ideas.</p>

          <div className="row g-4 justify-content-center">
            {leaders.map((leader, i) => (
              <div key={i} className="col-md-4 col-sm-6">
                <div className="about-leader-card p-4">
                  <img src={leader.img} alt={leader.name} />
                  <h5 className="fw-bold mt-3">{leader.name}</h5>
                  <p className="text-primary mb-2">{leader.role}</p>
                  <div className="d-flex justify-content-center gap-3 fs-5">
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-twitter-x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
