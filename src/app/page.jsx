'use client';
import './globals.css'; // Import global styles 

import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function HomePage() {
  // State to store theme: 'dark' or 'light'
  const [theme, setTheme] = useState('dark');


  // Load theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);


  // Toggle between dark and light theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };


  return (
    <main className="container">
      <div className="profile-image">
        <Image
          src="/images/shin.jpg"
          alt="Avatar"
          width={100}
          height={100}
          className="avatar"
        />
      </div>


      <h1>Xuan Han Nguyen</h1>
      <p className="subtitle">阮春欣</p>


      <button
        aria-label="Toggle theme"
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>


      <nav className="nav-links">
        <a href="/about" className="nav-link">
          About
        </a>
        <a href="/projects" className="nav-link">
          Projects
        </a>
        <a href="/blogs" className="nav-link">
          Blogs
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </nav>


      <footer>
        
  
      </footer>

    </main>
  );
}
