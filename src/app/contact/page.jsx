"use client";

import { useState, useEffect } from "react";
import "../style/contact.css"; // Custom styles for contact page

export default function ContactPage() {
  const [theme, setTheme] = useState("light");

  // Handle theme toggle and save it to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme in localStorage
  };

  // Load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <main className="contact-container">
      <header className="contact-header">
        <h1> Hi, I am here </h1>
        <p>Click to know who I am </p>
      </header>

      <div className="social-icons-container">
        <a href="mailto:han.nx2404@gmail.com" className="social-icon">
          <img src="/images/email.svg" alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/hannx2404/" className="social-icon">
          <img src="/images/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/hhan245" className="social-icon">
          <img src="/images/github.png" alt="GitHub" />
        </a>
        <a href="https://www.facebook.com/eroohxxn/" className="social-icon">
          <img src="/images/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://discord.com/users/eroohxxn" className="social-icon">
          <img src="/images/discord.svg" alt="Discord" />
        </a>
        <a href="https://www.instagram.com/its.haniu/" className="social-icon">
          <img src="/images/instagram.svg" alt="CodeSandbox" />
        </a>
      </div>

      <button className="home-button" onClick={() => window.location.href = "/"}>
        Home
      </button>

    </main>
  );
}
