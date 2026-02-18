import React, { useState } from "react";
import { loginUser } from "../api/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // 1. Added State to hold input data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting login with:", formData);

    try {
      const { data } = await loginUser(formData);

      // Save token (Assuming backend returns access_token)
      localStorage.setItem("token", data.access_token);

      alert("Login Successful!");
      console.log("Response Data:", data);

      // Optional: Redirect user here (e.g., window.location.href = "/dashboard")
    } catch (error) {
      // Check if it's a CORS error or a 4xx/5xx error
      console.error("Login Error:", error.response?.data || error.message);
      alert(error.response?.data?.detail || "Login Failed: Connection Refused");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-glow"></div>

      <div className="auth-card">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to continue to your dashboard</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="auth-group">
            <label>Email</label>
            <input
              name="email" // Added name attribute
              type="email"
              placeholder="Enter your email"
              className="auth-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="auth-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                name="password" // Added name attribute
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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
          </div>

          <div className="auth-options">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="auth-btn">
            Sign In
          </button>

          <p className="auth-footer">
            Don’t have an account? <a href="/register">Create account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
