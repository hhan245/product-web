// page.jsx
"use client";
import '../style/project.css';
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Diabetes Prediction",
    techStack: ["Python"],
    description:
      "Predicting a patient’s diabetes status based on specific diagnostic metrics found in the dataset is the task at hand.",
    image: "/images/pj1.png",
    github: "https://github.com/hhan245/Predict-Diabetes",
  },
  {
    title: "Emotion Recognition",
    techStack: [
      "Python"
    ],
    description:
      "Worked on training machine learning models for emotion recognition using available datasets",
    image: "/images/pj2.png",
    github: "https://github.com/hhan245/Emotion-Recognition",
  },
  {
    title: "Oil Spill Detection",
    techStack: [
      "Python"
    ],
    description:
      " Applied machine learning techniques for binary classification of oil spill incidents using satellite imagery.",
    image: "/images/pj3.png",
    github: "https://github.com/hhan245/Oil-Spill",
  },
  {
    title: "The Jazza",
    techStack: [
      "Java", "MySQL", "HTML"
    ],
    description:
      " Developed sales management system and integrate a database to store customer and order data securely.",
    image: "/images/pj4.png",
    github: "https://github.com/hhan245/The-Jazza",
  },
  {
    title: "Codae - CD Sales Website",
    techStack: [
      "JavaScript", "CSS", "Next.js", "Strapi"
    ],
    description:
      " Built a sales website and integrated a CMS for dynamic content updates, balancing user experience with business requirements.",
    image: "/images/pj5.png",
    github: "https://github.com/hhan245/Codae",
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
            <p className="tech-stack">{project.techStack.join("  ")}</p>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/github.png"
                  alt="GitHub"
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
