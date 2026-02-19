import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending to backend:", formData);

    try {
      const { data } = await registerUser(formData);
      alert("Registration Successful!");
      console.log(data);
    } catch (error) {
      // This will now show you the actual error array if it fails again
      const errorDetail = error.response?.data?.detail;
      console.log("Backend Error:", errorDetail);
      alert(
        typeof errorDetail === "object"
          ? JSON.stringify(errorDetail)
          : "Registration Failed",
      );
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glow"></div>
      <div className="auth-container">
        <div className="auth-left">
          <h1>
            Build smarter <br />
            <span className="gradient-text">Document Intelligence</span>
          </h1>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h2>Create account</h2>
            <button className="social-btn">Continue with Google</button>
            <div className="divider">
              <span>or</span>
            </div>

            <form onSubmit={handleSubmit}>
              {/* CHANGED: name="name" to satisfy the Pydantic validator */}
              <input
                name="name"
                type="text"
                placeholder="Full name"
                className="auth-input"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="auth-input"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="password-wrapper">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="auth-input"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              <button type="submit" className="auth-btn">
                Create account
              </button>

              <p className="auth-footer">
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
