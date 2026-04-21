import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Authentication System',
    subtitle: 'Full-Stack Auth with OTP & JWT',
    description:
      'A production-grade authentication system featuring user registration, email OTP verification, and secure login. Built with Spring Boot and React, implementing stateless JWT session management for scalable and secure API access.',
    longDesc: [
      'JWT-based stateless authentication for secure API access',
      'Email OTP generation with expiration logic via JavaMailSender (SMTP)',
      'Layered architecture: Controller → Service → Repository',
      'Complete validation, exception handling and error responses',
      'Responsive React UI with complete auth flow integration',
    ],
    stack: ['React.js', 'Spring Boot', 'MySQL', 'JWT', 'JavaMail', 'REST API'],
    color: '#7c6af7',
    gradient: 'linear-gradient(135deg, #7c6af7, #a78bf9)',
    icon: '🔐',
    status: 'Production Ready',
    github: 'https://github.com/',
    features: ['OTP Email Verify', 'JWT Auth', 'Spring Security', 'React UI'],
  },
  {
    id: 2,
    title: 'MediSlot',
    subtitle: 'Hospital Appointment Management',
    description:
      'A comprehensive web-based hospital appointment management platform enabling patients to book, manage, and cancel appointments. Features intelligent slot validation, double-booking prevention, and secure session tracking.',
    longDesc: [
      'Intelligent slot validation logic to prevent double-booking',
      'Session management for authenticated patient and admin flows',
      'Full CRUD operations for appointments, doctors, and patients',
      'Optimized SQL queries for high-performance data retrieval',
      'Deployed on Apache Tomcat following MVC architecture',
    ],
    stack: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Apache Tomcat'],
    color: '#00d4aa',
    gradient: 'linear-gradient(135deg, #00d4aa, #00b890)',
    icon: '🏥',
    status: 'Production Ready',
    github: 'https://github.com/',
    features: ['Slot Validation', 'MVC Pattern', 'Session Auth', 'CRUD Ops'],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <div className={`projects-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Projects</div>
          <h2 className="projects-title">
            Production-Ready <span className="gradient-text">Applications</span>
          </h2>
          <p className="projects-subtitle">
            End-to-end applications built with real-world patterns, security, and architecture.
          </p>
        </div>

        <div className={`projects-grid ${inView ? 'visible' : ''}`}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card ${expanded === project.id ? 'expanded' : ''}`}
              style={{ '--delay': `${i * 0.15}s`, '--proj-color': project.color }}
            >
              {/* Card header */}
              <div className="pc-top">
                <div className="pc-icon" style={{ background: project.gradient }}>
                  {project.icon}
                </div>
                <div className="pc-status">
                  <span className="status-dot" />
                  {project.status}
                </div>
              </div>

              <h3 className="pc-title">{project.title}</h3>
              <p className="pc-subtitle">{project.subtitle}</p>
              <p className="pc-desc">{project.description}</p>

              {/* Feature pills */}
              <div className="pc-features">
                {project.features.map(f => (
                  <span key={f} className="feature-pill">{f}</span>
                ))}
              </div>

              {/* Expandable details */}
              {expanded === project.id && (
                <div className="pc-details">
                  <div className="details-title">Key Implementations</div>
                  <ul className="details-list">
                    {project.longDesc.map((d, idx) => (
                      <li key={idx}>
                        <span className="check">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stack */}
              <div className="pc-stack">
                {project.stack.map(tech => (
                  <span key={tech} className="stack-tag">{tech}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="pc-actions">
                <button
                  className="pc-btn-details"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {expanded === project.id ? 'Less Info' : 'More Details'}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ transform: expanded === project.id ? 'rotate(180deg)' : 'none', transition: '0.3s' }}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <a href={project.github} target="_blank" rel="noreferrer" className="pc-btn-github">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
              </div>

              {/* Glow overlay */}
              <div className="pc-glow" style={{ background: project.gradient }} />
            </div>
          ))}
        </div>

        {/* Architecture showcase */}
        <div className={`arch-showcase ${inView ? 'visible' : ''}`}>
          <div className="arch-title">Architecture Pattern</div>
          <div className="arch-flow">
            {['Client (React)', '→', 'REST API', '→', 'Spring Boot', '→', 'Service Layer', '→', 'Repository', '→', 'MySQL'].map((item, i) => (
              <span key={i} className={item === '→' ? 'arch-arrow' : 'arch-node'}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
