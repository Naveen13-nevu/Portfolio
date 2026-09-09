import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const categories = [
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: '#7c6af7',
    skills: [
      { name: 'Java (Core & Advanced)', level: 88, icon: '☕' },
      { name: 'Spring Boot', level: 87, icon: '🍃' },
      { name: 'Spring Security', level: 82, icon: '🔒' },
      { name: 'Spring Data JPA', level: 83, icon: '🗃️' },
      { name: 'Hibernate ORM', level: 80, icon: '🔗' },
      { name: 'REST APIs', level: 90, icon: '🔌' },
      { name: 'JWT Authentication', level: 85, icon: '🔐' },
      { name: 'Microservices', level: 65, icon: '🧩' },
      { name: 'Apache Kafka', level: 55, icon: '📨' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    color: '#00d4aa',
    skills: [
      { name: 'Angular', level: 82, icon: '🔺' },
      { name: 'React.js', level: 78, icon: '⚛️' },
      { name: 'TypeScript', level: 75, icon: '🔷' },
      { name: 'JavaScript (ES6+)', level: 80, icon: '🟨' },
      { name: 'RxJS Observables', level: 70, icon: '🔄' },
      { name: 'HTML5', level: 92, icon: '📄' },
      { name: 'CSS3', level: 85, icon: '🎨' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄️',
    color: '#f5a623',
    skills: [
      { name: 'MySQL', level: 86, icon: '🐬' },
      { name: 'Schema Design', level: 82, icon: '📐' },
      { name: 'Query Optimization', level: 78, icon: '⚡' },
      { name: 'Hibernate ORM', level: 80, icon: '🔗' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    icon: '🛠️',
    color: '#e94e77',
    skills: [
      { name: 'Docker', level: 65, icon: '🐳' },
      { name: 'Git & GitHub', level: 82, icon: '📦' },
      { name: 'Maven', level: 78, icon: '🏗️' },
      { name: 'Postman', level: 88, icon: '🚀' },
      { name: 'Swagger / OpenAPI', level: 75, icon: '📖' },
      { name: 'Apache Tomcat', level: 75, icon: '🐱' },
      { name: 'Netlify', level: 85, icon: '🌐' },
      { name: 'Spring Cloud / Eureka', level: 60, icon: '☁️' },
    ],
  },
];

const techCloud = [
  'Java', 'Spring Boot', 'Spring Security', 'Angular', 'React.js',
  'TypeScript', 'JavaScript', 'MySQL', 'JWT', 'REST API',
  'Microservices', 'Spring Cloud', 'Apache Kafka', 'Docker',
  'Hibernate ORM', 'Spring Data JPA', 'RxJS', 'Swagger',
  'Maven', 'Git', 'Postman', 'Netlify', 'OpenFeign', 'Eureka',
];

export default function Skills() {
  const [active, setActive] = useState('backend');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const activeCat = categories.find(c => c.id === active);

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <div className={`skills-intro ${inView ? 'visible' : ''}`}>
          <div className="section-label">Technical Skills</div>
          <h2 className="skills-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="skills-desc">
            A curated set of technologies I've used to build real, production-ready applications.
          </p>
        </div>

        <div className={`skills-tabs ${inView ? 'visible' : ''}`}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`skill-tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
              style={{ '--cat-color': cat.color }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className={`skills-panel ${inView ? 'visible' : ''}`}>
          <div className="skills-list">
            {activeCat?.skills.map((skill, i) => (
              <div
                key={skill.name}
                className="skill-row"
                style={{ '--delay': `${i * 0.06}s`, '--cat-color': activeCat.color }}
              >
                <div className="skill-meta">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ '--width': `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skills-radar">
            <div className="radar-center">
              <span className="radar-icon">{activeCat?.icon}</span>
              <span className="radar-label">{activeCat?.label}</span>
              <span className="radar-count">{activeCat?.skills.length} skills</span>
            </div>
          </div>
        </div>

        {/* Tech Cloud */}
        <div className={`tech-cloud ${inView ? 'visible' : ''}`}>
          <div className="tc-title">All Technologies</div>
          <div className="cloud-tags">
            {techCloud.map((tech, i) => (
              <span key={tech} className="cloud-tag" style={{ '--i': i }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
