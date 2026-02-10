import { useEffect, useState } from "react";
import { features } from "../data/features";

const AutoFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeFeature = features[activeIndex];

  return (
    <section className="auto-feature-section">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="section-title">
            Unlocks Value of <span className="gradient-text">Unstructured Data</span>
          </h2>
          <p className="section-subtitle">
            Transforming documents and images into structured intelligence.
          </p>
        </div>

        <div className="row align-items-center">

          {/* LEFT TABS */}
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <h5>{feature.title}</h5>
              <img src={feature.image} alt={feature.title} />
              <ul>
                {feature.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}



          {/* RIGHT IMAGE */}
          <div className="col-md-7">
            <div className="feature-preview fade">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="img-fluid rounded"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AutoFeatures;
