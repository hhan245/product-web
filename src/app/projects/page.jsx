"use client";
import { useState, useEffect } from "react";
import { Moon, Sun, Tag, Calendar, ArrowRight, Filter, X } from 'lucide-react';
import "../style/project.css";

const projects = [
  {
    title: "🏥 Jio Health",
    description: "Proposed a strategic initiative to virtualize hospitals in the Metaverse using digital twins. Revolutionary healthcare approach combining VR technology with medical services.",
    image: "/images/projects/pj1.png",
    link: "/projects/jio-health",
    type: "internal",
    tags: ["Metaverse", "Healthcare", "Digital Twins"]
  },
  {
    title: "🍕 The Jazza",
    description: "A comprehensive sales management system for pizza ordering and delivery management. Features real-time order tracking and inventory management.",
    image: "/images/projects/pj2.png",
    link: "https://www.youtube.com/watch?v=iKXkZXyRXFg&ab_channel=Ph%C6%B0%C6%A1ngNghi",
    type: "external",
    tags: ["Management", "Sales", "React"]
  },
  {
    title: "🛒 Cart Patrol",
    description: "Designed a shopping cart app using HCI principles to reduce impulsive purchases. Behavioral design meets e-commerce for mindful shopping experiences.",
    image: "/images/projects/pj3.png",
    link: "/projects/cart-patrol",
    type: "internal",
    tags: ["UX/UI", "Research", "Psychology"]
  },
  {
    title: "💿 CD Sales Website",
    description: "Conducted product research to identify the needs of both customers and store managers. Full-stack e-commerce solution with analytics dashboard.",
    image: "/images/projects/pj4.png",
    link: "https://github.com/hhan245/Codae",
    type: "github",
    tags: ["E-commerce", "Research", "Full-stack", "Analytics"]
  },
  {
    title: "🛢️ Oil Spill Detection",
    description: "Applied machine learning techniques for binary classification of oil spill incidents using satellite imagery.",
    image: "/images/projects/pj5.png",
    link: "https://github.com/hhan245/Oil-Spill",
    type: "external",
    tags: ["Data Visualization", "Python"]
  },
  {
    title: "🙂 Emotion Recognition",
    description: "Worked on training machine learning models for emotion recognition using available datasets",
    image: "/images/projects/pj6.png",
    link: "https://github.com/hhan245/Emotion-Recognition",
    type: "internal",
    tags: ["Machine Learning", "Python"]
  },
  {
    title: "🙂 Book Library",
    description: "A responsive Book Library application built with Dart, allowing users to manage, categorize, and track their personal book collections.",
    image: "/images/projects/pj7.png",
    link: "https://github.com/hhan245/book-library",
    type: "internal",
    tags: ["Dart", "Flutter", "Mobile"]
  }
];

export default function ProjectsPage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <main className="projects-container">
      {/* Theme Toggle */}
      <div className="theme-toggle-container">
        <button
          aria-label="Toggle theme"
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Moon className="icon" /> : <Sun className="icon" />}
        </button>
      </div>

      <div className="header-section">
        <h1 className="title">Han's Projects</h1>
        <p className="subtitle">
          A collection of projects built with passion, creativity, and countless hours of dedication.
          Each project represents a journey of learning and growth.
        </p>
        
        <div className="decorative-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div 
            className="project-card" 
            key={idx}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
              
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  <span>View Project</span>
                  <span className="btn-icon">
                    {project.type === 'github' ? '📁' : '🔗'}
                  </span>
                </a>
              </div>
            </div>

            <div className="card-border"></div>
          </div>
        ))}
      </div>

      <div className="footer-section">
        <div className="coming-soon">
          <span>More projects coming soon...</span>
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </main>
  );
}