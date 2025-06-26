"use client";

import { useState, useEffect } from "react";
import "../../style/blog-post.css"; 

const blogContent = {
  title: "What Makes a Good Visualization?",
  date: "Thursday, 5 June, 2025",
  description:
    "I often find myself not just crunching numbers but telling stories. And one of the most powerful ways to tell a story is through visualization.But what makes a good visualization? I recently revisited a classic visual by David McCandless that breaks it down beautifully—and I’d like to reflect on how it applies to our work.",
  content: [
    {
      sectionTitle: "🔍 The 4 Elements of a Powerful Visualization",
      body: "David’s Venn diagram presents four intersecting dimensions that contribute to successful visual communication:",
      subsections: [
        {
          title: "1. Information (Data) – Integrity",
          body: "This is where we start: the accuracy, consistency, and honesty of the data. A chart is only as useful as the trust we can place in its source. Messy, incomplete, or misleading data can sabotage everything else.",
        },
        {
          title: "2. Story (Concept) – Interestingness",
          body: `Data without narrative is forgettable. What patterns matter? What’s the “so what”? The story connects data to meaning, making it relevant, new, or even surprising.
                 In my projects, I find this is where stakeholders light up—when a scatterplot becomes a trend, or a number becomes a question.`
        },
        {
          title: "3. Goal (Function) – Usefulness",
          body: `Every chart should have a purpose. Is it meant to compare, track, explain, or predict? A successful visualization has a clear function, making it efficient and actionable.
                 I often check myself: Is this chart answering the question the business is actually asking—or just looking nice?`,
        },
        {
          title: "4. Visual Form (Metaphor) – Beauty",
          body: `This is where design thinking meets analytics. The goal isn’t just to make something “pretty,” but to create harmony, clarity, and structure. A good visual should guide the eye and calm the brain.
                 Color, spacing, typography, chart type—they all matter. A pie chart might be perfect in one case, and completely misleading in another.`,
        },
      ],
    },
    {
      sectionTitle: "🎯 The Sweet Spot: Successful Visualization",
      body: "A successful visualization that is honest, engaging, purposeful, and beautiful. It’s not just “data art.” It’s not just “pretty charts.” It’s not even just “analysis.” It’s communication. And when done right, it can change minds, drive action, and shape strategy.  ",
    },
    {
      sectionTitle: "🧠 Final Thoughts",
      body: "As analysts, we’re not just number-crunchers. We’re storytellers, designers, and translators. Visualizations are one of our most powerful tools—but only when we balance art, data, and purpose.",
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
