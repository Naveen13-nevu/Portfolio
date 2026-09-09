import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "MediSlot",
    subtitle: "Hospital Appointment Management System",
    description:
      "End-to-end appointment booking platform using Angular SPA and secure Spring Boot RESTful services. Features normalized MySQL schemas, ACID compliance, role-based access control, and live Netlify deployment.",
    longDesc: [
      "Normalized MySQL relational schema with foreign keys, indexes and ACID compliance",
      "Server-side slot conflict resolution to eliminate double-booking during concurrent requests",
      "Spring Security + JWT with Role-Based Access Control (RBAC) for healthcare data protection",
      "Angular SPA with reactive forms and component-driven UI",
      "CI/CD pipeline on Netlify with sub-second page response times",
    ],
    stack: [
      "Angular",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Netlify",
    ],
    color: "#7c6af7",
    gradient: "linear-gradient(135deg, #7c6af7, #a78bf9)",
    icon: "🏥",
    status: "Live on Netlify",
    github: "https://github.com/Naveen13-nevu",
    live: "https://medislot01.netlify.app",
    features: ["RBAC + JWT", "Slot Validation", "Angular SPA", "CI/CD"],
  },
  {
    id: 2,
    title: "TaskFlow",
    subtitle: "Productivity & Task Management Application",
    description:
      "A responsive full-stack task management app enabling users to create, categorize, prioritize and monitor task lifecycle workflows with real-time status updates and dynamic filtering.",
    longDesc: [
      "Spring Data JPA + Hibernate with MySQL for optimized complex query performance",
      "Modular Angular components with RxJS observables and custom pipe filters",
      "Reactive forms with client-side validation and centralized backend exception handling",
      "Dynamic task filtering, categorization and priority management",
      "Live production deployment on Netlify with automated build pipeline",
    ],
    stack: [
      "Angular",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "RxJS",
    ],
    color: "#00d4aa",
    gradient: "linear-gradient(135deg, #00d4aa, #00b890)",
    icon: "✅",
    status: "Live on Netlify",
    github: "https://github.com/Naveen13-nevu",
    live: "https://todowork1.netlify.app",
    features: [
      "RxJS Observables",
      "JPA + Hibernate",
      "Angular Forms",
      "Live Deploy",
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <div className={`projects-header ${inView ? "visible" : ""}`}>
          <div className="section-label">Projects</div>
          <h2 className="projects-title">
            Production-Ready <span className="gradient-text">Applications</span>
          </h2>
          <p className="projects-subtitle">
            End-to-end applications built with real-world patterns, security,
            and architecture.
          </p>
        </div>

        <div className={`projects-grid ${inView ? "visible" : ""}`}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card ${expanded === project.id ? "expanded" : ""}`}
              style={{
                "--delay": `${i * 0.15}s`,
                "--proj-color": project.color,
              }}
            >
              {/* Card header */}
              <div className="pc-top">
                <div
                  className="pc-icon"
                  style={{ background: project.gradient }}
                >
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
                {project.features.map((f) => (
                  <span key={f} className="feature-pill">
                    {f}
                  </span>
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
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pc-actions">
                <button
                  className="pc-btn-details"
                  onClick={() =>
                    setExpanded(expanded === project.id ? null : project.id)
                  }
                >
                  {expanded === project.id ? "Less Info" : "More Details"}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform:
                        expanded === project.id ? "rotate(180deg)" : "none",
                      transition: "0.3s",
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pc-btn-github"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="pc-btn-github"
                  style={{
                    borderColor: "var(--accent-secondary)",
                    color: "var(--accent-secondary)",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              </div>

              {/* Glow overlay */}
              <div
                className="pc-glow"
                style={{ background: project.gradient }}
              />
            </div>
          ))}
        </div>

        {/* Architecture showcase */}
        <div className={`arch-showcase ${inView ? "visible" : ""}`}>
          <div className="arch-title">Architecture Pattern</div>
          <div className="arch-flow">
            {[
              "Client (React)",
              "→",
              "REST API",
              "→",
              "Spring Boot",
              "→",
              "Service Layer",
              "→",
              "Repository",
              "→",
              "MySQL",
            ].map((item, i) => (
              <span
                key={i}
                className={item === "→" ? "arch-arrow" : "arch-node"}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
