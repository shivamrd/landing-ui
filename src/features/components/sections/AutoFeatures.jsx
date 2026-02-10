import { useEffect, useState } from "react";
import { features } from "../data/features";

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
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-5 text-white">
            <h2 className="feature-main-title mb-4">{activeFeature.title}</h2>
            <ul className="feature-description-list">
              {activeFeature.description.map((desc, i) => (
                <li key={i} className="mb-3">{desc}</li>
              ))}
            </ul>

            {/* PROGRESS INDICATORS (The dots) */}
            <div className="d-flex gap-2 mt-5">
              {features.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE PREVIEW */}
          <div className="col-md-7">
            <div className="image-container-gradient">
              <img
                key={activeFeature.image} // Key helps trigger animation on change
                src={activeFeature.image}
                alt={activeFeature.title}
                className="img-fluid main-feature-img fade-in"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AutoFeatures;