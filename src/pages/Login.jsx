import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Login button clicked");
};


  return (
    <div className="auth-page">

      {/* Background Glow */}
      <div className="auth-glow"></div>

      {/* Login Card */}
      <div className="auth-card">

        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">
          Sign in to continue to your dashboard
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>


          {/* Email */}
          <div className="auth-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="auth-input"
            />
          </div>

          {/* Password */}
          <div className="auth-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="auth-input"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* Forgot */}
          <div className="auth-options">
            <a href="#">Forgot password?</a>
          </div>

          {/* Button */}
          <button type="submit" className="auth-btn">
            Sign In
          </button>

          {/* Bottom Text */}
          <p className="auth-footer">
            Don’t have an account? <a href="/register">Create account</a>
          </p>

          

        </form>
      </div>
    </div>
  );
};

export default Login;
