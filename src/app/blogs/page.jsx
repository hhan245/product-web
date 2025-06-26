"use client";

import { useState, useEffect } from "react";
import "../style/blog.css"; // Assuming blog.css is your custom styles

const blogs = [
  {
    title: "GenAI",
    date: "1 December 2024",
    description:
      "Understanding ChatGPT, Copilot, and How Design Shapes AI Interaction?",
    tags: ["#ai", "#chatgpt"],
    link: "/blogs/genai",
  },
  {
    title: "What Makes a Good Visualization?",
    date: "5 June 2025",
    description:
      "I recently revisited a classic visual by David McCandless that breaks it down beautifully—and I’d like to reflect on how it applies to our work.",
    tags: ["#visualization"],
    link: "/blogs/visualization",
  },
];

export default function BlogsPage() {
  const [filteredTags, setFilteredTags] = useState([]);
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

  const handleTagClick = (tag) => {
    if (filteredTags.includes(tag)) {
      setFilteredTags(filteredTags.filter((t) => t !== tag));
    } else {
      setFilteredTags([...filteredTags, tag]);
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    filteredTags.every((tag) => blog.tags.includes(tag))
  );

  return (
    <main className="blogs-container">
      <h1>Han's Blogs</h1>
      <p>Here lies a collection of thoughts I couldn’t keep to myself.</p>

      <div className="blogs-layout">
        {/* Left Column: Tags Section */}
        <div className="tags-container">
          <span>Tags</span>
          <div className="tag-list">
            {["#ai", "#chatgpt", "#visualization"].map((tag) => (
              <span
                key={tag}
                className={`tag ${filteredTags.includes(tag) ? "selected" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Blog Posts Section */}
        <div className="blogs-list">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, idx) => (
              <div className="blog-card" key={idx}>
                <h3>{blog.title}</h3>
                <p>{blog.date} | {blog.tags.join(" ")}</p>
                <p>{blog.description}</p>
                <a href={blog.link} className="read-more">Read more &gt;&gt;</a>
              </div>
            ))
          ) : (
            <p>No blogs match your filters.</p>
          )}
        </div>
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
