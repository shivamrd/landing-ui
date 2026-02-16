import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("theme") === "light",
  );

  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      className="theme-btn"
      style={{
        padding: "8px 15px",
        borderRadius: "20px",
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-card)",
        color: "var(--text-main)",
        cursor: "pointer",
      }}
    >
      {isLight ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
