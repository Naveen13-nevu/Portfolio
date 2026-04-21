import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const timeline = [
  { year: '2019', label: 'B.Sc Computer Science', sub: 'Sree Muthukumaraswamy College' },
  { year: '2022', label: 'Graduated with 7.4 CGPA', sub: 'Started professional journey' },
  { year: '2023', label: 'Customer Support Executive', sub: 'Teleperformance Chennai' },
  { year: '2025', label: 'Java Full Stack Training', sub: 'SLA Institute, Chennai' },
  { year: '2025', label: 'IBM Certification', sub: 'HTML, CSS, JavaScript (WD0102EN)' },
  { year: '2026', label: 'Production-Ready Projects', sub: 'Auth System + MediSlot' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <div className={`about-grid ${inView ? 'visible' : ''}`}>
          {/* Left */}
          <div className="about-left">
            <div className="section-label">About Me</div>
            <h2 className="about-title">
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span>
            </h2>

            <p className="about-text">
              I'm a Java Full Stack Developer trained at SLA Institute, Chennai — with hands-on experience building 
              two complete production-ready applications. I specialize in designing and implementing 
              end-to-end solutions: from database schema design to responsive frontends.
            </p>
            <p className="about-text">
              My background in customer support gave me a unique perspective — I understand that 
              software must be reliable, intuitive, and performant. I bring the same discipline 
              I developed handling SLA constraints to every line of code I write.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="hi-icon">🎯</div>
                <div>
                  <strong>Full Lifecycle</strong>
                  <span>From API design to deployed UI</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">🔐</div>
                <div>
                  <strong>Security First</strong>
                  <span>JWT auth, OTP verification</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">📐</div>
                <div>
                  <strong>Clean Architecture</strong>
                  <span>MVC, layered design patterns</span>
                </div>
              </div>
            </div>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Purasaiwalkam, Chennai</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href="mailto:naveenkumar12634@gmail.com" className="info-value info-link">
                  naveenkumar12634@gmail.com
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <a href="tel:+918072133430" className="info-value info-link">+91 8072133430</a>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value available">
                  <span className="dot" />
                  Available for Hire
                </span>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="about-right">
            <div className="timeline-card">
              <div className="tc-header">
                <span className="tc-label">My Journey</span>
                <div className="tc-dots">
                  <span /><span /><span />
                </div>
              </div>
              <div className="timeline">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="timeline-item"
                    style={{ '--delay': `${i * 0.1}s` }}
                  >
                    <div className="tl-year">{item.year}</div>
                    <div className="tl-connector">
                      <div className="tl-dot" />
                      {i < timeline.length - 1 && <div className="tl-line" />}
                    </div>
                    <div className="tl-content">
                      <strong>{item.label}</strong>
                      <span>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <strong>B.Sc. Computer Science</strong>
                <span>Sree Muthukumaraswamy College</span>
                <span className="edu-cgpa">CGPA: 7.4 · 2019–2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
