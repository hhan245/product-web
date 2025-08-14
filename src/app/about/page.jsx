'use client';
import "../style/about.css"; 

import { useState, useEffect } from 'react';
import { 
  Download, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  Lightbulb,
  GraduationCap,
  Code,
  Palette,
  Database,
  Globe,
  Sun,
  Moon
} from 'lucide-react';

export default function AboutPage() {
  const [theme, setTheme] = useState('dark');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const educations = [
    {
      school: 'University of Economic Ho Chi Minh City',
      degree: 'Bachelor of Technology Innovation',
      timeline: 'Oct 2022 - Present',
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Current',
      description: 'Focusing on innovation management, technology entrepreneurship, and digital transformation strategies.'
    },
    {
      school: 'Nguyen Thi Minh Khai High School for the Gifted',
      degree: 'Specialized in English',
      timeline: 'Aug 2019 - May 2022',
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Graduated',
      specialization: ['History', 'Literature'],
      description: 'Specialized program with focus on English language and humanities, developing strong analytical and communication skills.'
    }
  ];
  
  const skillCategories = [
    {
      category: 'Design & Creativity',
      skills: [
        { name: 'Miro', icon: 'miro.png', level: 75 },
        { name: 'Canva', icon: 'canva.webp', level: 95 },
        { name: 'Adobe Illustrator', icon: 'adobe.png', level: 75 },
        { name: 'Figma', icon: 'figma.png', level: 75 }

      ]
    },
    {
      category: 'Productivity & Collaboration',
      skills: [
        { name: 'Microsoft 365', icon: 'microsoft365.png', level: 92 },
        { name: 'Google Workspace', icon: 'googleworkspace.webp', level: 95 },
        { name: 'GitHub', icon: 'github.png', level: 85 },
        { name: 'Notion', icon: 'notion.png', level: 80 },
      ]
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Tableau', icon: 'tableau.svg', level: 80 },
        { name: 'SQL', icon: 'sql.png', level: 60 },
        { name: 'Excel', icon: 'excel.png', level: 90 },
        { name: 'Python', icon: 'python.png', level: 70 }

      ]
    },
    {
      category: 'Development',
      skills: [
        { name: 'HTML', icon: 'html.png', level: 85 },
        { name: 'CSS', icon: 'css.png', level: 82 },
        { name: 'JavaScript', icon: 'javascript.png', level: 90 },
        { name: 'React', icon: 'react.png', level: 80 },
        { name: 'Node.js', icon: 'nodejs.png', level: 80 },
        { name: 'Postman', icon: 'postman.png', level: 85 },

       
      ]
    }
  ];

  const activities = [
    {
      title: 'UEH Mentoring Program',
      role: 'Mentee',
      icon: Users,
      timeline: '2023 - Present',
      description: 'Worked on real-world problem-solving scenarios, receiving personalized advice to enhance decision-making and strategic thinking. Gained valuable insights into the professional world, networked with other mentees, and gained advice on effectively navigating career paths.',
      achievements: ['Strategic thinking development', 'Professional networking', 'Career guidance']
    },
    {
      title: 'Nôm',
      role: 'Co-Founder',
      icon: Lightbulb,
      timeline: '2022 - 2023',
      description: 'Launched and managed a small Facebook-based sales page for custom 3D-printed items. Learned how to present products, engage customers, and improve based on feedback.',
      achievements: ['Product presentation', 'Customer engagement', 'Business development']
    }
  ];

  const personalInfo = {
    fullName: 'Nguyen Xuan Han',
    nickname: 'Han',
    vietnameseName: '阮春欣',
    location: 'Ho Chi Minh City, Vietnam',
    status: 'Currently exploring Product Management, UX Research, and Data Analytics',
    interests: ['UX Design', 'Product Discovery', 'Data-driven Decision Making']
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  
  return (
     <>
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
      <main className={`about-container ${isVisible ? 'visible' : ''}`}>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          
          <div className="profile-section">
            <div className="profile-image-container">
              <img
                src="/images/han.jpg"
                alt="Han's Avatar"
                className="profile-image"
              />
              <div className="status-indicator"></div>
            </div>
            <div className="profile-info">
              <h1 className="main-title">Hi there! I'm Han</h1>
              <div className="name-variants">
                <span className="name-primary">{personalInfo.fullName}</span>
                <span className="name-separator">|</span>
                <span className="name-nickname">{personalInfo.nickname}</span>
                <span className="name-separator">|</span>
                <span className="name-vietnamese">{personalInfo.vietnameseName}</span>
              </div>
              
              <div className="location-status">
                <div className="location">
                  <MapPin className="icon" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="status">
                  <Award className="icon" />
                  <span>{personalInfo.status}</span>
                </div>
              </div>
              <p className="tagline">Welcome to the little corner of the Internet where Haniuoi becomes a vibe 🌸</p>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="https://drive.google.com/file/d/1GHzNHM9e1KISiMqzM8QXGgU0Jfqz6isU/view?usp=drive_link" 
               className="cv-button" 
               target="_blank" 
               rel="noopener noreferrer">
              <Download className="icon" />
              My CV
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <div className="section-header">
          <h2>Get to know me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm currently pursuing opportunities as a <strong>Product Intern</strong>. With a strong interest in UX design, product discovery, and data-driven decision-making, I've worked on hands-on projects that simulate real product cycles from research to wireframing and testing.
            </p>
            <p>
              My approach combines analytical thinking with creative problem-solving, always keeping the user at the center of every decision. I believe in the power of data to tell stories and guide product strategy.
            </p>
          </div>
          <div className="interests-grid">
            {personalInfo.interests.map((interest, index) => (
              <div key={index} className="interest-tag">
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="section-header">
          <h2>Education Journey</h2>
          <div className="section-line"></div>
        </div>
        <div className="education-timeline">
          {educations.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div className="education-icon">
                  <GraduationCap className="icon" />
                </div>
                <div className="education-main">
                  <h3>{edu.school}</h3>
                  <h4>{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="timeline">
                      <Calendar className="icon" />
                      {edu.timeline}
                    </span>
                    <span className="location">
                      <MapPin className="icon" />
                      {edu.location}
                    </span>
                    <span className={`status ${edu.status.toLowerCase()}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
              <p className="education-description">{edu.description}</p>
              {edu.specialization && (
                <div className="specializations">
                  {edu.specialization.map((spec, specIndex) => (
                    <span key={specIndex} className="specialization-tag">{spec}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`skill-card ${selectedSkill === `${categoryIndex}-${skillIndex}` ? 'selected' : ''}`}
                    onClick={() => setSelectedSkill(selectedSkill === `${categoryIndex}-${skillIndex}` ? null : `${categoryIndex}-${skillIndex}`)}
                  >
                    <div className="skill-icon">
                      <img src={`/images/${skill.icon}`} alt={skill.name} />
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-level">
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="section-header">
          <h2>Activities & Experience</h2>
          <div className="section-line"></div>
        </div>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-header">
                <div className="activity-icon">
                  <activity.icon className="icon" />
                </div>
                <div className="activity-title-section">
                  <h3>{activity.title}</h3>
                  <div className="activity-meta">
                    <span className="role">{activity.role}</span>
                    <span className="timeline">{activity.timeline}</span>
                  </div>
                </div>
              </div>
              <p className="activity-description">{activity.description}</p>
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {activity.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}