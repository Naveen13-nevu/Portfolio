import React from "react";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const experiences = [
  {
    role: "Java Full Stack Developer Training",
    company: "SLA Institute, Chennai",
    period: "2025 – 2026",
    type: "Training",
    color: "#7c6af7",
    highlights: [
      "Handled 50+ customer interactions daily via digital chat channels within strict SLA benchmarks",
      "Applied systematic root-cause analysis and structured debugging to resolve technical inquiries in real time",
      "Collaborated with technical teams to document incident workflows and maintain CRM records accurately",
      "Developed strong analytical thinking, communication and problem-solving skills transferable to software engineering",
    ],
  },
  {
    role: "Customer Support Executive",
    company: "Teleperformance, Chennai",
    period: "2023 – 2025",
    type: "Full-time",
    color: "#00d4aa",
    highlights: [
      "Managed 50+ customer interactions daily via chat with high accuracy and resolution speed",
      "Maintained and updated customer records in CRM systems with strict data accuracy standards",
      "Developed strong problem-solving habits through real-time issue resolution under SLA constraints",
      "Built attention to detail and methodical debugging mindset applicable to software development",
    ],
  },
];

const certifications = [
  {
    title: 'IBM Professional Certification: Web Development Fundamentals',
    code: 'WD0102EN',
    issuer: 'IBM',
    year: '2025',
    icon: '🏆',
    color: '#f5a623',
  },
  {
    title: 'Java Full Stack Developer Professional Training',
    code: 'Spring Boot · Angular · Microservices · Docker',
    issuer: 'SLA Institute, Chennai',
    year: '2025–2026',
    icon: '☕',
    color: '#7c6af7',
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <div className={`exp-header ${inView ? "visible" : ""}`}>
          <div className="section-label">Experience</div>
          <h2 className="exp-title">
            My <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className={`exp-grid ${inView ? "visible" : ""}`}>
          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="exp-item"
                style={{ "--delay": `${i * 0.15}s`, "--exp-color": exp.color }}
              >
                <div className="ei-connector">
                  <div className="ei-dot" />
                  {i < experiences.length - 1 && <div className="ei-line" />}
                </div>
                <div className="ei-content">
                  <div className="ei-header">
                    <div>
                      <span className="ei-type">{exp.type}</span>
                      <h3 className="ei-role">{exp.role}</h3>
                      <div className="ei-meta">
                        <span className="ei-company">{exp.company}</span>
                        <span className="ei-period">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="ei-highlights">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>
                        <span className="ei-bullet" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-sidebar">
            <div className="cert-section">
              <div className="cs-title">Certifications</div>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="cert-card"
                  style={{ "--cert-color": cert.color }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-info">
                    <strong>{cert.title}</strong>
                    <span>
                      {cert.issuer} · {cert.year}
                    </span>
                    <span className="cert-code">{cert.code}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="edu-section">
              <div className="cs-title">Education</div>
              <div className="edu-item">
                <div className="edu-emoji">🎓</div>
                <div>
                  <strong>B.Sc. Computer Science</strong>
                  <span>Sree Muthukumaraswamy College</span>
                  <span>Chennai · 2019–2022</span>
                  <span className="edu-grade">CGPA: 7.4</span>
                </div>
              </div>
            </div>

            <div className="soft-skills">
              <div className="cs-title">Soft Skills</div>
              <div className="ss-grid">
                {[
                  "Problem Solving",
                  "Attention to Detail",
                  "Communication",
                  "SLA Management",
                  "Team Collaboration",
                  "Fast Learner",
                ].map((s) => (
                  <span key={s} className="ss-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
