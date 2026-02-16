import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";


const ContactUS = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
  <MainLayout>
    <div className="enterprise-wrapper">
      <div className="container-fluid">
        <div className="row min-vh-100">


          {/* LEFT CONTENT */}
          <div className="col-lg-7 left-side">
            <h1>
              Let’s Get <span>In Touch</span>
            </h1>

            <p>
              Share your details and our team will respond as soon as possible.
            </p>

            <p className="small-text">
              For job opportunities, please visit our careers page.
            </p>

            <p className="small-text">
              For product help, check our documentation.
            </p>

            <p className="phone-text">
              Call us directly at <strong>650-779-5660</strong>
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="form-card">

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="row">
                  <div className="col-6 mb-3">
                    <label>First Name *</label>
                    <input type="text" name="firstName" className="form-control custom-input" />
                  </div>
                  <div className="col-6 mb-3">
                    <label>Last Name *</label>
                    <input type="text" name="lastName" className="form-control custom-input" />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label>Work Email *</label>
                  <input type="email" name="email" className="form-control custom-input" />
                </div>

                {/* Company */}
                <div className="mb-3">
                  <label>Company / Organization *</label>
                  <input type="text" name="company" className="form-control custom-input" />
                </div>

                {/* Industry */}
                <div className="mb-3">
                  <label>Industry</label>
                  <select name="industry" className="form-control custom-input">
                    <option>Select Industry</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                    <option>Retail</option>
                  </select>
                </div>

                {/* Primary Role */}
                <div className="mb-3">
                  <label>Your Primary Role *</label>
                  <div>
                    <input type="radio" name="role" value="Business" onChange={handleChange}/> Business User
                  </div>
                  <div>
                    <input type="radio" name="role" value="Engineer" onChange={handleChange}/> Engineer / Developer
                  </div>
                  <div>
                    <input type="radio" name="role" value="Other" onChange={handleChange}/> Other
                  </div>
                </div>

                {/* Monthly Volume */}
                <div className="mb-3">
                  <label>Estimated Monthly Volume *</label>
                  <select name="volume" className="form-control custom-input">
                    <option>Select Range</option>
                    <option>0 - 1,000</option>
                    <option>1,000 - 10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>

                {/* How can we help */}
                <div className="mb-3">
                  <label>How can we help?</label>
                  <div><input type="checkbox" name="pricing" onChange={handleChange}/> Pricing</div>
                  <div><input type="checkbox" name="api" onChange={handleChange}/> API Usage</div>
                  <div><input type="checkbox" name="security" onChange={handleChange}/> Data Security</div>
                  <div><input type="checkbox" name="partnership" onChange={handleChange}/> Partnership</div>
                </div>

                {/* Additional Info */}
                <div className="mb-3">
                  <label>Additional Details</label>
                  <textarea rows="4" name="details" className="form-control custom-input"></textarea>
                </div>

                {/* Agreement */}
                <div className="mb-3">
                  <input type="checkbox" name="agree" onChange={handleChange}/> I agree to the terms and privacy policy.
                </div>

                <button type="submit" className="submit-btn">
                  SUBMIT
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  </MainLayout>
  );
};

export default ContactUS;
