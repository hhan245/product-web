"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Sun, Moon, Clock, Calendar, BookOpen } from 'lucide-react';
import "../../style/blog-post.css"; 

const blogContent = {
  title: "Web Development",
  date: "Thursday, 7 August, 2025",
  readTime: "7 min read",
  description:
    "How to make a website that is fast, secure, and user-friendly? This blog explores the latest trends in web development, including responsive design, progressive web apps, and serverless architecture.",
  content: [
    {
      sectionTitle: "1. Introduction",
      body: "Web development is an ever-evolving field that combines creativity and technology to create engaging user experiences. In this blog, we will explore the latest trends and best practices in web development, focusing on how to build fast, secure, and user-friendly websites.",
      icon: "🌐",
    },
    {
      sectionTitle: "2. Responsive Design",
      icon: "🎯",
      body: "Responsive design is about creating web pages that look good on all devices. This means using flexible layouts, images, and CSS media queries to ensure a seamless user experience across different screen sizes.",
      subsections: [
        {
          title: "Mobile-First Approach",
          body: "Designing for mobile first ensures that your website is optimized for the most common device used to access the web today.",
        },
        {
          title: "Fluid Grids",
          body: "Using fluid grids allows your layout to adapt to different screen sizes without breaking the design.",
        },
      ],
    },
    {
      sectionTitle: "3. Progressive Web Apps (PWAs)",
      icon: "🧠",
      body: "Progressive Web Apps combine the best of web and mobile apps. They are fast, reliable, and can work offline. PWAs use modern web capabilities to deliver an app-like experience directly in the browser.",
    },
    {
      sectionTitle: "Coming soon...",
    }
  ],
};

export default function App() {
  const [activeSection, setActiveSection] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [theme, setTheme] = useState('light');
  const [scrollProgress, setScrollProgress] = useState(0);
  const tocRef = useRef(null);

  // Toggle subsection visibility
  const toggleSection = (sectionTitle) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  // Generate section ID from title
  const generateId = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  // Update active section and scroll progress
  const updateScrollPosition = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    setScrollProgress((scrollTop / docHeight) * 100);

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        setActiveSection(section.id);
      }
    });
  };

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    updateScrollPosition();
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <div className="blog-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon className="theme-icon" />
        ) : (
          <Sun className="theme-icon" />
        )}
      </button>

      <div className="content-wrapper">
        {/* Header */}
        <header className="blog-header">
          <div className="category-badge">
            <BookOpen className="category-icon" />
            Development
          </div>
          
          <h1 className="blog-title">
            {blogContent.title}
          </h1>
          
          <p className="blog-description">
            {blogContent.description}
          </p>
          
          <div className="blog-meta">
            <div className="meta-item">
              <Calendar className="meta-icon" />
              <span>{blogContent.date}</span>
            </div>
            <div className="meta-item">
              <Clock className="meta-icon" />
              <span>{blogContent.readTime}</span>
            </div>
          </div>
        </header>

        <div className="blog-layout">
          {/* Table of Contents */}
          <aside className="toc-sidebar">
            <div className="toc-sticky">
              <nav ref={tocRef} className="toc-nav">
                <h2 className="toc-title">
                  Table of Contents
                </h2>
                
                <ul className="toc-list">
                  {blogContent.content.map((section, index) => {
                    const sectionId = generateId(section.sectionTitle);
                    const isActive = activeSection === sectionId;
                    const hasSubsections = section.subsections?.length > 0;
                    const isExpanded = expandedSections[section.sectionTitle];
                    
                    return (
                      <li key={index} className="toc-item">
                        <div className="toc-item-wrapper">
                          <a
                            href={`#${sectionId}`}
                            className={`toc-link ${isActive ? 'active' : ''}`}
                          >
                            {section.icon && <span className="toc-icon">{section.icon}</span>}
                            {section.sectionTitle}
                          </a>
                          
                          {hasSubsections && (
                            <button
                              onClick={() => toggleSection(section.sectionTitle)}
                              className="toc-toggle"
                            >
                              {isExpanded ? (
                                <ChevronDown className="chevron-icon" />
                              ) : (
                                <ChevronRight className="chevron-icon" />
                              )}
                            </button>
                          )}
                        </div>
                        
                        {hasSubsections && isExpanded && (
                          <ul className="toc-subsections">
                            {section.subsections.map((subsection, idx) => {
                              const subsectionId = generateId(subsection.title);
                              return (
                                <li key={idx}>
                                  <a
                                    href={`#${subsectionId}`}
                                    className="toc-sublink"
                                  >
                                    {subsection.title}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="blog-main">
            <article className="blog-article">
              <div className="article-content">
                {blogContent.content.map((section, index) => {
                  const sectionId = generateId(section.sectionTitle);
                  
                  return (
                    <section key={index} id={sectionId} className="content-section">
                      <div className="section-header">
                        {section.icon && (
                          <span className="section-icon">{section.icon}</span>
                        )}
                        <h2 className="section-title">
                          {section.sectionTitle}
                        </h2>
                      </div>
                      
                      <div className="section-content">
                        <p className="section-body">
                          {section.body}
                        </p>
                        
                        {section.highlight && (
                          <div className="highlight-box">
                            <p className="highlight-text">
                              {section.highlight}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {section.subsections && (
                        <div className="subsections">
                          {section.subsections.map((subsection, idx) => {
                            const subsectionId = generateId(subsection.title);
                            
                            return (
                              <div key={idx} id={subsectionId} className="subsection">
                                <h3 className="subsection-title">
                                  {subsection.title}
                                </h3>
                                <p className="subsection-body">
                                  {subsection.body}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}