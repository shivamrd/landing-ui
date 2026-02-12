import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register clicked");
  };

  return (
    <div className="auth-wrapper">

      {/* Background Glow */}
      <div className="auth-glow"></div>

      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-left">
          <h1>
            Build smarter <br />
            <span className="gradient-text">Document Intelligence</span>
          </h1>
          <p>
            Turn complex documents into structured, reliable data
            with enterprise-grade accuracy.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">

          <div className="auth-card">

            <h2>Create account</h2>

            {/* Social Buttons */}
            <button className="social-btn">
              Continue with Google
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Full name"
                className="auth-input"
              />

              <input
                type="email"
                placeholder="Email address"
                className="auth-input"
              />

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="auth-input"
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              <button type="submit" className="auth-btn">
                Create account
              </button>

              <p className="auth-footer">
                Already have an account?{" "}
                <Link to="/login">Sign in</Link>
              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
