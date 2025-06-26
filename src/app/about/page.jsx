'use client';
import '../style/about.css';

import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function AboutPage() {
  const [theme, setTheme] = useState('dark');
  const [selectedExperience, setSelectedExperience] = useState(0);
  const educations = [
    {
      school: 'University of Economic Ho Chi Minh City',
      degree: 'Bachelor of Technology Innovation',
      timeline: 'Oct 2022 - Present',
    },
    {
      school: 'Nguyen Thi Minh Khai High School for the Gifted',
      degree: 'Specialized in English',
      timeline: 'Aug 2019 - May 2022',
      specialization: ['History']
    }
  ];
  
  const codingBiases = [
    { name: 'Notion', icon: 'notion.png' },
    { name: 'Miro', icon: 'miro.png' },
    { name: 'Microsoft 365', icon: 'microsoft365.png' },
    { name: 'Google Workspace', icon: 'googleworkspace.webp' },
    { name: 'Canva', icon: 'canva.webp' },
    { name: 'Adobe Illustrator', icon: 'adobe.png' },
    { name: 'Tableau', icon: 'tableau.svg' },
    { name: 'HTML', icon: 'html.png' },
    { name: 'CSS', icon: 'css.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'Postman', icon: 'postman.png' },
    { name: 'GitHub', icon: 'github.png' },

    

  ];
  const activities = [
  {
    title: 'UEH Mentoring Program',
    description: 'Worked on real-world problem-solving scenarios, receiving personalized advice to enhance decision-making and strategic thinking. Gained valuable insights into the professional world, networked with other mentees, and gained advice on effectively navigating career paths.',
  },
  {
    title: 'Co-Founder  – Nôm',
    description: 'Launched and managed a small Facebook-based sales page for custom 3D-printed items. Learned how to present products, engage customers, and improve based on feedback.',
  },
];



  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <main className="container"style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Get to know me Section */}
      <h1>Hi there! I'm Han</h1>
      <p className="intro">
        Xuan Han Nguyen | Han | Nguyễn Xuân Hân
        <br />
      
      </p>
      <div className="profile-image">
        <Image
          src="/images/han.jpg"
          alt="Avatar"
          width={100}
          height={100}
          className="avatar"
        />
      </div>
      

      <div className="buttons">
        <a href="https://drive.google.com/file/d/12nteenrPm1bHqw88cskYrHUgGjcryAwC/view?usp=sharing" className="button">CV</a>
      </div>
      <p className="question">Welcome to the little corner of the Internet where Hân iu ơi becomes a vibe 🌷</p>
      {/* Get to know me Section */}
      <section className="about-me">
        <div className="about-me-container">
          <h2>Get to know me</h2>
          <p className="about-me-text">
            I’m currently pursuing opportunities as a Product Management Intern. With a strong interest in UX design, product discovery, and data-driven decision-making, I’ve worked on hands-on projects that simulate real product cycles — from research to wireframing and testing.
            <br />
            I’ve worked on hands-on projects that simulate real product cycles — from research to wireframing and testing.
          </p>
        </div>
      </section>
      {/* About my educations Section */}
      <section className="educations">
        <h2>About my educations</h2>
        <div className="education-detail">
          {educations.map((edu, index) => (
            <div key={index} >
              <h3>{edu.school}</h3>
              <p>{edu.timeline}</p>
              <h4>{edu.degree}</h4>
            </div>
          ))}
        </div>
      </section>
      {/* About My Coding Biases Section */}
      <section className="coding-biases">
        <h2>About my skills</h2>
        <div className="coding-biases-icons">
          {codingBiases.map((bias, index) => (
            <div key={index} className="coding-bias-item">
              <img src={`/images/${bias.icon}`} alt={bias.name} className="coding-bias-icon" />
              <span>{bias.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* About My Contributions Section */}
      <section className="contributions">
        <h2>About my activities</h2>
        <div className="activities">
          {activities.map((activities, index) => (
            <div key={index} className="activity-card">
              <h3>{activities.title}</h3>
              <p>{activities.description}</p>
    
            </div>
          ))}
        </div>
      </section>

      <div className="theme-toggle-container">
        <button
          aria-label="Toggle theme"
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>

      
    </main>
  );
}
