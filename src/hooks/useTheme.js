// src/hooks/useTheme.js
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        console.log("Using saved theme from localStorage:", savedTheme);
        return savedTheme;
      }

      // Check system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      console.log("System prefers dark mode:", systemPrefersDark);
      return systemPrefersDark ? "dark" : "light";
    }
    return "dark"; // Default for server-side
  });

  const toggleTheme = () => {
    console.log("Toggling theme from", theme);
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      console.log("Setting new theme:", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Applying theme to document:", theme);
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);

      // Verify the attribute was set
      console.log(
        "Current document attribute:",
        document.documentElement.getAttribute("data-theme")
      );
    }
  }, [theme]);

  return { theme, toggleTheme };
};
