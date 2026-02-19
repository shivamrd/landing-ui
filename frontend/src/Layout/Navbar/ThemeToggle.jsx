import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") === "light",
  );

  useEffect(() => {
    const theme = isLight ? "light" : "dark";
    // Always SET the attribute — never remove it
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isLight]);

  // Apply saved theme on first render (before any toggle)
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  return (
    <button
      onClick={() => setIsLight((prev) => !prev)}
      className="theme-toggle me-3"
    >
      {isLight ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
