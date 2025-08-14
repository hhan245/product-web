"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Sun, Moon, Clock, Calendar, BookOpen } from 'lucide-react';
import "../../style/blog-post.css"; 

const blogContent = {
  title: "GenAI",
  date: "Sunday, 1 December 2024",
  readTime: "8 min read",
  description:
    "Understanding ChatGPT, Copilot, and How Design Shapes AI Interaction.",
  content: [
    {
      sectionTitle: "Introduction",
      body: "When using ChatGPT, many users think it just reads the content and magically knows what to do. But in reality, the layout and structure of your input matter a lot. How a website, spreadsheet, or document is structured can directly influence how well ChatGPT interprets the information.",
    },
    {
      sectionTitle: "Layout Affects Understanding",
      icon: "💡",
      body: "Different layouts impact how ChatGPT processes your input:",
      subsections: [
        {
          title: "Structured layouts",
          body: "Structured layouts (like Excel) work well because the data is clear, tabular, and machine-readable.",
        },
        {
          title: "Complex website layouts",
          body: "Complex website layouts (e.g., heavily styled HTML, dynamic content, or poorly structured text) can confuse or limit ChatGPT's ability to understand what's going on.",
        },
        {
          title: "Unstructured text",
          body: "Sometimes, ChatGPT can't access or interpret a website at all due to design limitations or access restrictions.",
        },
      ],
    },
    {
      sectionTitle: "Copilot vs. ChatGPT",
      icon: "🧠",
      body: "While both are AI-powered tools, Copilot and ChatGPT serve different purposes:",
      subsections: [
        {
          title: "Microsoft Copilot (2 main types)",
          body: `1. Copilot for Microsoft 365: This is integrated into Microsoft Office applications like Word and Excel. It helps users by suggesting edits, generating content, and automating repetitive tasks based on the context of the document or spreadsheet.
                 
2. Copilot for Azure OpenAI Service: This is a more advanced version that allows developers to build custom AI applications using OpenAI's models. It provides more flexibility and control over how AI is integrated into various applications.`, 
        },
        {
          title: "ChatGPT",
          body: `Primarily generates textual responses. It doesn't directly interact with files or interfaces unless plugins or tools are enabled. Its strength is conversational understanding, idea generation, writing, and answering complex queries when given enough context.`, 
        },
      ],
    },
    {
      sectionTitle: "How to Ask ChatGPT Effectively",
      icon: "🧾",
      body: `The way you structure your prompt has a big impact on the quality of GenAI's output. Start by covering the 5Ws (Who, What, When, Where, Why) to give full context. Next, specify the expected output (e.g., summary, blog, table). Follow that with clear instructions and the structure you want the response in—whether it's a paragraph, list, code snippet, or table. A well-structured prompt almost always results in better, more useful output.`,
    },
    {
      sectionTitle: "New ChatGPT Session Tip",
      icon: "🔁",
      body: `Whenever you start a new ChatGPT session, the model has no memory of previous conversations. But you can copy-paste a summary of your previous session into the new one. This gives ChatGPT the context it needs to continue helping you effectively.`,
      highlight: `💡 Tip: Ask ChatGPT to summarize your previous session for you. Then paste that summary into the next session and continue from there.`,
    },
    {
      sectionTitle: "Building Your Own AI Bot",
      icon: "🛠️",
      body: `If you plan to build your own AI model or assistant, it's important to consider your primary use case. A custom-built model allows for specialization, but it may come at the cost of development time and budget. More general AI models (like GPT) can handle a wide range of tasks but may lack deep domain-specific expertise. Mid-term, generalist models are often sufficient for most business tasks, but their limitations should be clearly understood—especially when accuracy or industry expertise is required.`,
    },
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
            Technology
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