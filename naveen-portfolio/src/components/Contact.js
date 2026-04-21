import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'naveenkumar12634@gmail.com',
    href: 'mailto:naveenkumar12634@gmail.com',
    color: '#7c6af7',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 8072133430',
    href: 'tel:+918072133430',
    color: '#00d4aa',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Purasaiwalkam, Chennai',
    href: 'https://maps.google.com/?q=Purasaiwalkam,Chennai',
    color: '#f5a623',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission (replace with EmailJS in production)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <div className={`contact-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Contact</div>
          <h2 className="contact-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-subtitle">
            I'm actively looking for full-time opportunities. Whether you have a role, a project, 
            or just want to say hi — my inbox is open!
          </p>
        </div>

        <div className={`contact-grid ${inView ? 'visible' : ''}`}>
          {/* Left */}
          <div className="contact-left">
            <div className="cl-card">
              <div className="cl-status">
                <span className="dot" />
                <span>Open to opportunities</span>
              </div>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === 'Location' ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="contact-link"
                    style={{ '--link-color': link.color }}
                  >
                    <div className="cl-icon">{link.icon}</div>
                    <div className="cl-info">
                      <span className="cl-label">{link.label}</span>
                      <span className="cl-value">{link.value}</span>
                    </div>
                    <svg className="cl-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <span className="sl-label">Find me on</span>
                <div className="sl-buttons">
                  <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="sl-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="sl-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Job Opportunity / Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${status === 'sending' ? 'loading' : ''} ${status === 'success' ? 'success' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' && (
                  <svg className="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                )}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'sending' && 'Sending...'}
                {!status && (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="success-msg">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
