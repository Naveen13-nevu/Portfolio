import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const count = Math.floor(window.innerWidth / 15);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animFrame;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 106, 247, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 106, 247, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero grid-bg">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Background orbs */}
      <div className="orb orb-purple hero-orb-1" />
      <div className="orb orb-teal hero-orb-2" />

      <div className="hero-content container">
        <div className="hero-pre">
          <span className="pre-line" />
          <span className="pre-text">Hello, World! 👋</span>
        </div>

        <h1 className="hero-title">
          <span className="title-name">Naveen Kumar</span>
          <br />
          <span className="title-role">
  <span className="typed-text">Java Full Stack Developer</span>
</span>
        </h1>

        <p className="hero-desc">
          Building production-ready applications from{' '}
          <span className="highlight">RESTful APIs</span> and{' '}
          <span className="highlight">JWT authentication</span> to{' '}
          <span className="highlight">responsive React UIs</span>.
          Specialized in Spring Boot, MySQL, and layered backend architecture.
        </p>

        <div className="hero-badges">
          <span className="badge">🏆 IBM Certified</span>
          <span className="badge">⚡ Spring Boot</span>
          <span className="badge">⚛️ React.js</span>
          <span className="badge">🔐 JWT Auth</span>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToContact}>
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-secondary" onClick={scrollToProjects}>
            <span>View Projects</span>
          </button>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            title="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Production Apps</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">8+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">IBM</span>
            <span className="stat-label">Certified Dev</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
