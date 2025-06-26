"use client";

import { useState, useEffect } from "react";
import "../../style/blog-post.css"; // Custom styles for blog post page

const blogContent = {
  title: "GenAI",
  date: "Sunday, 1 December 2024",
  description:
    "Understanding ChatGPT, Copilot, and How Design Shapes AI Interaction.",
  content: [
    {
      sectionTitle: "Introduction",
      body: "When using ChatGPT, many users think it just reads the content and magically knows what to do. But in reality, the layout and structure of your input matter a lot. How a website, spreadsheet, or document is structured can directly influence how well ChatGPT interprets the information.",
    },
    {
      sectionTitle: "💡Layout Affects Understanding",
      body: "Different layouts impact how ChatGPT processes your input:",
      subsections: [
        {
          title: " - Structured layouts",
          body: "Structured layouts (like Excel) work well because the data is clear, tabular, and machine-readable.",
        },
        {
          title: " - Complex website layouts",
          body: "Complex website layouts (e.g., heavily styled HTML, dynamic content, or poorly structured text) can confuse or limit ChatGPT’s ability to understand what’s going on.",
        },
        {
          title: " - Unstructured text",
          body: "Sometimes, ChatGPT can’t access or interpret a website at all due to design limitations or access restrictions.",
        },
      ],
    },
    {
      sectionTitle: "🧠 Copilot vs. ChatGPT",
      body: "While both are AI-powered tools, Copilot and ChatGPT serve different purposes:",
      subsections: [
        {
          title: "Microsoft Copilot (2 main types)",
          body: `1. Copilot for Microsoft 365: This is integrated into Microsoft Office applications like Word and Excel. It helps users by suggesting edits, generating content, and automating repetitive tasks based on the context of the document or spreadsheet.
                 2. Copilot for Azure OpenAI Service: This is a more advanced version that allows developers to build custom AI applications using OpenAI's models. It provides more flexibility and control over how AI is integrated into various applications.`, 
        },
        {
          title: "ChatGPT",
          body: `Primarily generates textual responses.
                 It doesn’t directly interact with files or interfaces unless plugins or tools are enabled.
                 Its strength is conversational understanding, idea generation, writing, and answering complex queries when given enough context.`, 
        },
      ],
    },
    {
      sectionTitle: "🧾 How to Ask ChatGPT Effectively",
      body: `The way you structure your prompt has a big impact on the quality of GenAI's output. Start by covering the 5Ws (Who, What, When, Where, Why) to give full context. Next, specify the expected output (e.g., summary, blog, table). Follow that with clear instructions and the structure you want the response in—whether it's a paragraph, list, code snippet, or table. A well-structured prompt almost always results in better, more useful output.`,
    },
    {
      sectionTitle: "🔁 New ChatGPT Session Tip",
      body: `Whenever you start a new ChatGPT session, the model has no memory of previous conversations. But you can copy-paste a summary of your previous session into the new one. This gives ChatGPT the context it needs to continue helping you effectively.
            💡Tip: Ask ChatGPT to summarize your previous session for you. Then paste that summary into the next session and continue from there.`,
    },
    {
      sectionTitle: "🛠️ Building Your Own AI Bot",
      body: `If you plan to build your own AI model or assistant, it’s important to consider your primary use case. A custom-built model allows for specialization, but it may come at the cost of development time and budget. More general AI models (like GPT) can handle a wide range of tasks but may lack deep domain-specific expertise. Mid-term, generalist models are often sufficient for most business tasks, but their limitations should be clearly understood—especially when accuracy or industry expertise is required.`,
    },
  ],
};

export default function BlogPostPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubsection, setActiveSubsection] = useState(null);
  const [collapsedSections, setCollapsedSections] = useState({});
  const [theme, setTheme] = useState("light");

  // Toggle the visibility of a section
  const toggleSection = (sectionTitle) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  // Update active section based on scroll position
  const onScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection(section.id);
      }
    });
  };

  // Handle theme toggle and save it to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme in localStorage
  };

  // Load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="blog-post-container">
      <header className="post-header">
        <h1>{blogContent.title}</h1>
        <p>{blogContent.date}</p>
      </header>

      <div className="post-container">
        {/* Left Column: Table of Contents */}
        <nav className="toc">
          <h2>On This Page</h2>
          <ul>
            {blogContent.content.map((section, index) => (
              <li key={index}>
                <div className="toc-item">
                  <a
                    href={`#${section.sectionTitle.replace(/\s+/g, "")}`}
                    className={activeSection === section.sectionTitle.replace(/\s+/g, "") ? "active" : ""}
                  >
                    {section.sectionTitle}
                  </a>
                  {section.subsections && (
                    <button onClick={() => toggleSection(section.sectionTitle)}>
                      {collapsedSections[section.sectionTitle] ? "▼" : "▶"}
                    </button>
                  )}
                </div>
                {section.subsections && !collapsedSections[section.sectionTitle] && (
                  <ul>
                    {section.subsections.map((subsection, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${subsection.title.replace(/\s+/g, "")}`}
                          className={activeSubsection === subsection.title.replace(/\s+/g, "") ? "active" : ""}
                        >
                          {subsection.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Column: Blog Content */}
        <article className="post-content">
          <p>{blogContent.description}</p>
          {blogContent.content.map((section, index) => (
            <section key={index} id={section.sectionTitle.replace(/\s+/g, "")}>
              <h2>{section.sectionTitle}</h2>
              <p>{section.body}</p>
              {section.subsections &&
                section.subsections.map((subsection, idx) => (
                  <section key={idx} id={subsection.title.replace(/\s+/g, "")}>
                    <h3>{subsection.title}</h3>
                    <p>{subsection.body}</p>
                  </section>
                ))}
            </section>
          ))}
        </article>
      </div>

      {/* Theme Toggle Button */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </main>
  );
}
