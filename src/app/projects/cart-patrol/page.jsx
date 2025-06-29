"use client";
import "../../style/project-post.css";
import React, { useState, useEffect } from 'react';
import {  
  Calendar, 
  Users, 
  Target, 
  CheckCircle, 
  Code, 
  Palette, 
  Database, 
  Globe,
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  //Key featutes
  const features = [
    {
      title: 'Smart Reminders',
      description: 'Notify users when they exceed the specified shopping cart limit. Require users to delete 3 out of 5 randomly displayed items in the shopping cart',
      icon: CheckCircle,
      color: 'feature-analytics'
    },
    {
      title: 'Gamefication',
      description: 'The game of catching “Thief”. A thief is a person who steals items from the cart. Users can catch the thief by clicking on it.',
      icon: Zap,
      color: 'feature-security'
    },
    {
      title: 'Corner Pop-up Notifications',
      description: 'Subtle yet visible notifications appear at the screen’s edge, suggesting which items to cut; adds a gentle pressure mechanic and enhances the game-like experience.',
      icon: Smartphone,
      color: 'feature-mobile'
    },
  ];

  const processSteps = [
    {
      phase: 'Research & Planning',
      duration: '2 weeks',
      description: 'User research, competitive analysis, and technical architecture planning'
    },
    {
      phase: 'Design & Prototyping',
      duration: '3 weeks',
      description: 'UI/UX design, wireframing, and interactive prototype development'
    },
    {
      phase: 'Design Choices',
      duration: '1 week',
      description: 'Finalizing design system, color palette, and typography based on user feedback'
    },
    {
      phase: 'Testing & Evaluation',
      duration: '2 weeks',
      description: 'Conducting usability tests, gathering user feedback, and iterating on design'
    },
    {
      phase: 'Recommendations',
      duration: '1 weeks',
      description: 'Finalizing design recommendations based on testing results and user feedback'
    },
  ];

  const challenges = [
    {
      challenge: 'Nudges were initially perceived as annoying or disruptive',
      solution: ' Adjusted tone and frequency based on user feedback to feel more like guidance than pressure'
    },
    {
      challenge: 'Some users ignored budget progress features',
      solution: 'Designed microservices architecture with auto-scaling capabilities and load balancing'
    },
    {
      challenge: 'Complex Data Visualization',
      solution: 'Introduced gamification and clearer visual cues to encourage engagement'
    },
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
                Cart<span className="title-accent">Patrol</span>
              </h1>
              <p className="hero-description">
                 Cart Patrol is a behavioral-focused shopping cart management app designed to help users reduce impulsive online purchases.
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
                <p className="stat-value">Product Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-image-section">
        <div className="project-image-container">
          <img 
            src="../images/cart-patrol/HCI.png" 
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
              Built with Human-Computer Interaction (HCI) principles, the app encourages intentional decision-making through subtle reminders, visual feedback, and motivational nudges.
            </p>
            <p className="overview-text">
              By combining usability and psychology, Cart Patrol aims to make shopping more mindful and less reactive.
            </p>
            
          </div>
          
          <div className="overview-images">
            <img 
              src="../images/cart-patrol/1.png" 
              alt="Analytics Dashboard"
              className="overview-image"
            />
            <img 
              src="../images/cart-patrol/2.png" 
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
              Powerful functionality designed to transform how businesses interact with their data
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


      {/* Development Process */}
      <section className="process-section">
        <div className="process-container">
          <div className="section-header">
            <h2 className="section-title">Development Process</h2>
            <p className="section-subtitle">
              A structured approach ensuring quality and timely delivery
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">
                  {index + 1}
                </div>
                <div className="step-content">
                  <div className="step-header">
                    <h3 className="step-title">{step.phase}</h3>
                    <div className="step-duration">
                      <Clock className="duration-icon" />
                      <span className="duration-text">{step.duration}</span>
                    </div>
                  </div>
                  <p className="step-description">{step.description}</p>
                </div>
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
              Key technical challenges overcome during development
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
          <p className="footer-text">
            Or
          </p>
          <a href="https://www.canva.com/design/DAGrv-Pdxq8/Gjn_Nk-VBl_Bj_s6YEuR2Q/edit?utm_content=DAGrv-Pdxq8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="footer-link-text">
            <button className="footer-link">
              More details here
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;