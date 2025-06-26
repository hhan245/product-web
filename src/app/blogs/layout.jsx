"use client";

import { ReactNode } from 'react';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nguyen Xuan Han - Blogs</title>
        <meta name="description" content="About Xuan Khoa Tu Nguyen" />
      </head>
      <body>
        <div className="layout-wrapper">
          <header className="header">
            <nav className="nav">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/projects" className="nav-link">Projects</a>
              <a href="/blogs" className="nav-link">Blogs</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>
          </header>

          {children}

          
        </div>

        <style jsx>{`
          .layout-wrapper {
            min-height: 100vh;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .header {
            padding: 1rem;
            display: flex;
            justify-content: center;
          }
          .nav {
            display: flex;
            gap: 1rem;
          }
          .nav-link {
            color: var(--text-color);
            text-decoration: none;
            font-weight: bold;
            padding: 0.5rem;
            transition: color 0.2s ease;
          }
          .nav-link:hover {
            color: var(--link-color);
          }
          .footer {
            text-align: center;
            padding: 1rem;
            font-size: 0.75rem;
            color: var(--footer-color);
            background-color: var(--bg-color);
          }
          .footer a {
            color: var(--link-color);
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        `}</style>

        <style jsx global>{`
          :root {
            --bg-color: #121417;
            --text-color: white;
            --link-color: #2563eb;
            --footer-color: #6b7280;
          }
          [data-theme='light'] {
            --bg-color: #f9fafb;
            --text-color: #1a202c;
            --link-color: #2563eb;
            --footer-color: #718096;
          }
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
        `}</style>
      </body>
    </html>
  );
}
