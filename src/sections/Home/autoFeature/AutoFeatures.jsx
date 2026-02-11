import { useEffect, useState } from "react";
import { features } from "../../../data/features";
import "./AutoFeatures.css";

const AutoFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeFeature = features[activeIndex];

  return (
    <section className="auto-feature-section py-5">
      <div className="container">

        {/* NEW MAIN HEADER SECTION */}
        <div className="text-center mb-5">
          <h2 className="main-unlock-title mb-3">
            Unlocks Value of Unstructured Data
          </h2>
          <p className="main-unlock-subtitle mx-auto">
            Transforming unstructured data like documents and images into insights to drive efficiency and innovation.
          </p>
        </div>

        <div className="row align-items-center mt-5">
          {/* LEFT CONTENT */}
          <div className="col-md-5 text-white text-center text-md-start">
            <h3 className="feature-main-title mb-3">
              {activeFeature.title}
            </h3>

            <ul className="feature-description-list ps-3">
              {activeFeature.description.map((desc, i) => (
                <li key={i} className="mb-3">{desc}</li>
              ))}
            </ul>

            {/* PROGRESS INDICATORS */}
            <div className="d-flex gap-2 mt-5 justify-content-center justify-content-md-start">
              {features.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE PREVIEW - FILLED BOX */}
          <div className="col-md-7 p-0">
            <div className="image-container-gradient">
              <div key={activeIndex} className="image-wrapper fade-in">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="main-feature-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoFeatures;