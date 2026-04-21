import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">NK</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">Java Full Stack Developer · Chennai, India</p>
        </div>

        <div className="footer-center">
          <p className="footer-copy">
            Designed & Built by{' '}
            <span className="footer-name">Naveen Kumar</span>
            {' '}· {year}
          </p>
          <p className="footer-stack">
            Built with{' '}
            <span>React</span> ·{' '}
            <span>Spring Boot</span> ·{' '}
            <span>❤️</span>
          </p>
        </div>

        <div className="footer-right">
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="footer-icon" title="LinkedIn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer-icon" title="GitHub">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="mailto:naveenkumar12634@gmail.com" className="footer-icon" title="Email">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bar" />
    </footer>
  );
}
