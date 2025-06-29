"use client";
import "../../style/project-post.css";
import React, { useState, useEffect } from 'react';
import {  
  Calendar, 
  Users, 
  Target, 
  CheckCircle, 
  Shield,
  Smartphone,
  TrendingUp,
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  //Key featutes
  const features = [
        {
          title: 'Virtual Hospital Environment',
          description: 'Built a digital replica of physical hospital layouts and systems to simulate real-world operations in a safe virtual space',
          icon: TrendingUp,
          color: 'feature-analytics'
        },
        {
          title: 'Real-time Data Integration',
          description: ' Enabled seamless synchronization between physical hospital sensors and the virtual model',
          icon: Shield,
          color: 'feature-security'
        },
        {
          title: 'Immersive Simulation for Training',
          description: 'Provided interactive environments for doctors and nurses to simulate scenarios, conduct risk assessments, and test workflows before real-world deployment.',
          icon: Smartphone,
          color: 'feature-mobile'
        },
  ];


  const challenges = [
    {
      challenge: 'Real-time data sync and performance bottlenecks',
      solution: ' Proposed hybrid architecture with cloud caching and edge computing (conceptual model)'
    },
    {
      challenge: 'Ethical sensitivity in healthcare applications',
      solution: 'Focused on hospital simulation and planning modules, not patient identity data'
    },
    {
      challenge: 'Communicating complex tech to non-tech stakeholders',
      solution: 'Designed visual walkthroughs and impact simulations for presentations'
    }
  ];

  return (
    <div className="portfolio-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className={`hero-inner ${isVisible ? 'visible' : ''}`}>
            <div className="hero-header">
              <span className="featured-badge">
                Featured Project
              </span>
              <h1 className="hero-title">
                Jio<span className="title-accent">Health</span>
              </h1>
              <p className="hero-description">
                 Explored a futuristic solution to virtualize hospital systems using digital twin technology integrated into the Metaverse.
              </p>
            </div>
             

            <div className="hero-stats">
              <div className="stat-card">
                <Calendar className="stat-icon" />
                <h3 className="stat-title">Timeline</h3>
                <p className="stat-value">2024</p>
              </div>
              <div className="stat-card">
                <Users className="stat-icon" />
                <h3 className="stat-title">Team Size</h3>
                <p className="stat-value">6 members</p>
              </div>
              <div className="stat-card">
                <Target className="stat-icon" />
                <h3 className="stat-title">My Role</h3>
                <p className="stat-value">Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-image-section">
        <div className="project-image-container">
          <img 
            src="../images/jio-health/Jio Health.png" 
            alt="AnalyticsPro Dashboard"
            className="project-image"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-grid">
          <div className="overview-content">
            <h2 className="section-title">Project Overview</h2>
            <p className="overview-text">
              The initiative aimed to simulate real-time hospital operations and patient behavior in a risk-free virtual environment.
            </p>
            <p className="overview-text">
              The project envisioned creating a virtual mirror of real-world hospital systems to simulate patient care, staff interactions, and hospital workflows in real time.
            </p>
            
          </div>
          
          <div className="overview-images">
            <img 
              src="../images/jio-health/1.png" 
              alt="Analytics Dashboard"
              className="overview-image"
            />
            <img 
              src="../images/jio-health/2.png" 
              alt="Data Visualization"
              className="overview-image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Key Features</h2>
            <p className="section-subtitle">
              Digital replication of hospital environments
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-icon ${feature.color}`}>
                  <feature.icon className="icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="challenges-section">
        <div className="challenges-container">
          <div className="section-header">
            <h2 className="section-title">Challenges & Solutions</h2>
            <p className="section-subtitle">
              Key challenges overcome during development
            </p>
          </div>

          <div className="challenges-list">
            {challenges.map((item, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-grid">
                  <div className="challenge-problem">
                    <h3 className="challenge-title">
                      <Target className="challenge-icon" />
                      Challenge
                    </h3>
                    <p className="challenge-text">{item.challenge}</p>
                  </div>
                  <div className="challenge-solution">
                    <h3 className="solution-title">
                      <CheckCircle className="solution-icon" />
                      Solution
                    </h3>
                    <p className="solution-text">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            ©Nguyen Xuan Han. Crafted with care and attention to detail.
          </p>
          <a href="/" className="footer-link-text">
            <button className="footer-link">
              ← Back to Home
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;