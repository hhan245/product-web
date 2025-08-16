'use client';
import { useState, useEffect, useRef } from 'react';
import "../style/about.css"; 

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
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("fade-out");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.add("fade-out");
          }
        });
      },
      { threshold: 0.3 } // 30% section trong viewport
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const [theme, setTheme] = useState('dark');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const magicRef = useRef(null);
  const sparkleLayerRef = useRef(null);

useEffect(() => {
  const area = magicRef.current;
  const layer = sparkleLayerRef.current;
  if (!area || !layer) return;

  const createSparkle = (x, y) => {
    const s = document.createElement("span");
    s.className = "sparkle";
    const size = Math.random() * 10 + 6;
    s.style.width = `${size}px`;
    s.style.height = `${size}px`;
    s.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    layer.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  };

  let last = 0;
  const handleMove = (e) => {
    const now = performance.now();
    if (now - last < 16) return; // Giới hạn FPS ~60
    last = now;

    const rect = layer.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    if (clientX == null) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    createSparkle(x, y);
  };

  area.addEventListener("mousemove", handleMove);
  area.addEventListener("touchmove", handleMove, { passive: true });

  return () => {
    area.removeEventListener("mousemove", handleMove);
    area.removeEventListener("touchmove", handleMove);
  };
}, []);

  // --- theming / visibility ---
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
        { name: 'Miro', icon: '/tools/miro.png', level: 75 },
        { name: 'Canva', icon: '/tools/canva.webp', level: 95 },
        { name: 'Adobe Illustrator', icon: '/tools/adobe.png', level: 75 },
        { name: 'Figma', icon: '/tools/figma.png', level: 75 }

      ]
    },
    {
      category: 'Productivity & Collaboration',
      skills: [
        { name: 'Microsoft 365', icon: '/tools/microsoft365.png', level: 92 },
        { name: 'Google Workspace', icon: '/tools/googleworkspace.webp', level: 95 },
        { name: 'GitHub', icon: '/tools/github.png', level: 85 },
        { name: 'Notion', icon: '/tools/notion.png', level: 80 },
      ]
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Tableau', icon: '/tools/tableau.svg', level: 80 },
        { name: 'SQL', icon: '/tools/sql.png', level: 60 },
        { name: 'Excel', icon: '/tools/excel.png', level: 90 },
        { name: 'Python', icon: '/tools/python.png', level: 70 }

      ]
    },
    {
      category: 'Development',
      skills: [
        { name: 'HTML', icon: '/tools/html.png', level: 85 },
        { name: 'CSS', icon: '/tools/css.png', level: 82 },
        { name: 'JavaScript', icon: '/tools/javascript.png', level: 90 },
        { name: 'React', icon: '/tools/react.png', level: 80 },
        { name: 'Node.js', icon: '/tools/nodejs.png', level: 80 },
        { name: 'Postman', icon: '/tools/postman.png', level: 85 },

       
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

     {/* HERO with magic wand */}
        <section className="hero-section-floating magic-area" ref={magicRef}>
            {/* Floating elements */}
            <img src="/images/another/Rabbit.png" className="floating floating3" alt="Rabbit" />
            <img src="/images/another/Palette.png" className="floating floating2" alt="Palette" />
            <img src="/images/another/Bust and Brushes.png" className="floating floating1" alt="Bust" />
            <img src="/images/another/Breaker.png" className="floating floating5" alt="Beaker" />
            <img src="/images/another/Saucer.png" className="floating floating6" alt="Saucer" />
            <img src="/images/another/Teacup.png" className="floating floating4" alt="Teacup" />

            {/* Main profile image */}
            <div className="center-profile">
              <img src="/images/another/han2.png" alt="Han" className="profile-main" />
              <div className="profile-info">
                <p className="name">Nguyen Xuan Han | Han | 阮春欣</p>
              </div>
            </div>
           {/* draw sparkles here so coords match the hero */}
          <div className="sparkle-layer" ref={sparkleLayerRef} />
        </section>


      {/* About Me Section */}
      <section className="about-section section">
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