"use client";
import { useState, useEffect } from 'react';
import { Moon, Sun, Tag, Calendar, ArrowRight, Filter, X } from 'lucide-react';
import "../style/blog.css"; 

const blogs = [
  {
    id: 1,
    title: "GenAI",
    date: "1 December 2024",
    description:
      "Understanding ChatGPT, Copilot, and How Design Shapes AI Interaction? Exploring the intersection of artificial intelligence and user experience design.",
    tags: ["ai", "chatgpt", "design"],
    link: "/blogs/genai",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "What Makes a Good Visualization?",
    date: "5 June 2025",
    description:
      "I recently revisited a classic visual by David McCandless that breaks it down beautifully—and I'd like to reflect on how it applies to our work in the modern data landscape.",
    tags: ["visualization", "design", "data"],
    link: "/blogs/visualization",
    readTime: "8 min read",
    category: "Design"
  },
  {
    id: 3,
    title: "Web Development",
    date: "Thursday, 7 August, 2025",
    description:
      "Exploring emerging trends, tools, and methodologies that are shaping the next generation of web applications and user experiences.",
    tags: ["webdev", "frontend", "trends"],
    link: "/blogs/web-development",
    readTime: "12 min read",
    category: "Development"
  }
];

const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

export default function App() {
  const [filteredTags, setFilteredTags] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleTagClick = (tag) => {
    if (filteredTags.includes(tag)) {
      setFilteredTags(filteredTags.filter((t) => t !== tag));
    } else {
      setFilteredTags([...filteredTags, tag]);
    }
  };

  const clearFilters = () => {
    setFilteredTags([]);
    setSearchQuery('');
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = filteredTags.length === 0 || 
      filteredTags.every((tag) => blog.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  return (
    <div className="blog-container">
      {/* Header */}
      <header className="blog-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="blog-title">Han's Blog</h1>
            <p className="blog-subtitle">Thoughts and insights worth sharing</p>
          </div>
          
          <div className="header-actions">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="mobile-filter-btn"
            >
              <Filter size={16} />
              <span>Filters</span>
            </button>
            
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
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="content-layout">
          {/* Sidebar - Filters */}
          <aside className={`sidebar ${showFilters ? 'show-mobile' : ''}`}>
            <div className="sidebar-sticky">
              {/* Search */}
              <div className="filter-card">
                <h3 className="filter-title">
                  <Filter size={18} />
                  Search & Filter
                </h3>
                
                <div className="filter-content">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  
                  {(filteredTags.length > 0 || searchQuery) && (
                    <button
                      onClick={clearFilters}
                      className="clear-filters-btn"
                    >
                      <X size={14} />
                      Clear filters
                    </button>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="filter-card">
                <h3 className="filter-title">
                  <Tag size={18} />
                  Tags
                </h3>
                
                <div className="tags-grid">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`tag-btn ${filteredTags.includes(tag) ? 'active' : ''}`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="filter-card">
                <h3 className="filter-title">Statistics</h3>
                <div className="stats-list">
                  <div className="stat-item">
                    <span className="stat-label">Total Articles</span>
                    <span className="stat-value">{blogs.length}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Filtered Results</span>
                    <span className="stat-value filtered">{filteredBlogs.length}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Categories</span>
                    <span className="stat-value">
                      {new Set(blogs.map(blog => blog.category)).size}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="main-section">
            {filteredBlogs.length > 0 ? (
              <div className="blog-grid">
                {filteredBlogs.map((blog, idx) => (
                  <article
                    key={blog.id}
                    className="blog-card"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="blog-header-section">
                      <div className="blog-meta">
                        <span className="category-badge">{blog.category}</span>
                        <span className="read-time">{blog.readTime}</span>
                      </div>
                      
                      <h2 className="blog-card-title">{blog.title}</h2>
                      
                      <div className="blog-date">
                        <Calendar size={14} />
                        <time dateTime={blog.date}>{blog.date}</time>
                      </div>
                    </div>

                    <p className="blog-description">{blog.description}</p>

                    <div className="blog-footer">
                      <div className="blog-tags">
                        {blog.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={`blog-tag ${filteredTags.includes(tag) ? 'active' : ''}`}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>

                      <a href={blog.link} className="read-more-btn">
                        Read more
                        <ArrowRight size={14} className="arrow-icon" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-content">
                  <div className="no-results-icon">
                    <Filter />
                  </div>
                  <h3 className="no-results-title">No articles found</h3>
                  <p className="no-results-text">
                    Try adjusting your search criteria or clearing the filters.
                  </p>
                  <button onClick={clearFilters} className="clear-all-btn">
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}