// page.jsx
"use client";
import '../style/project.css';
import { useState, useEffect } from "react";

const projects = [
  {
    title: "🏥Jio Health",
    description:
      "Proposed a strategic initiative to virtualize hospitals in the Metaverse using digital twins",
    image: "/images/pj1.png",
    link: "/projects/jio-health",
  },
  {
    title: "🍕The Jazza",
    description:
      "A sales management system for sales Pizza and order management.",
    image: "/images/pj2.png",
    link:  "https://www.youtube.com/watch?v=iKXkZXyRXFg&ab_channel=Ph%C6%B0%C6%A1ngNghi",
  },
  {
    title: "🛒Cart Patrol",
    description:
      "Designed a shopping cart app using HCI principles to reduce impulsive purchases",
    image: "/images/pj3.png",
    link: "/projects/cart-patrol",
  },
  {
    title: "💿CD Sales Website",
    description:
      "Conducted product research to identify the needs of both customers and store managers.",
    image: "/images/pj4.png",
    link: "https://github.com/hhan245/Codae",
  },
];

export default function ProjectsPage() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <main className="projects-container">
      <h1 className="title">Han's Projects</h1>
      <p className="subtitle">
        Some projects with crying many days.
      </p>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/readmore.png"
                  alt="Read more"
                  className="github-icon"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="theme-toggle-container">
        <button
          aria-label="Toggle theme"
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>

      
    </main>
  );
}
