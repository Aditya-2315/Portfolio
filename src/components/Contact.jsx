import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { resumeData } from '../data/resumeData';

export const Contact = () => {

  return (
    <section id="contact" className="contact-section">
      <div className="bg-glow-spot glow-cyan" style={{ top: '10%', left: '-5%' }}></div>

      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Info cards */}
          <div className="contact-info-col">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-text">
              I am currently looking for software development internships and full-time opportunities. If you have any questions, project ideas, or just want to say hi, feel free to drop a message!
            </p>

            <div className="info-cards-list">
              <a href={`mailto:${resumeData.email}`} className="info-card glass-card">
                <span className="info-icon-wrapper mail">
                  <Mail size={20} />
                </span>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <span className="info-value">{resumeData.email}</span>
                </div>
              </a>

              <a href={`tel:${resumeData.phone}`} className="info-card glass-card">
                <span className="info-icon-wrapper phone">
                  <Phone size={20} />
                </span>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{resumeData.phone}</span>
                </div>
              </a>

              <div className="info-card glass-card">
                <span className="info-icon-wrapper location">
                  <MapPin size={20} />
                </span>
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <span className="info-value">{resumeData.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials-row">
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <Github size={20} />
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
  background-color: var(--bg-secondary);
}

.contact-grid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 700px;
}

.contact-subtitle {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
  text-align: center;
}

.contact-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
  text-align: center;
}

.info-cards-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: 500px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.01);
  border-color: var(--glass-border);
  transition: var(--transition-normal);
}

.info-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.03);
}

.info-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon-wrapper.mail {
  background: rgba(0, 242, 254, 0.08);
  color: var(--accent-cyan);
}

.info-icon-wrapper.phone {
  background: rgba(139, 92, 246, 0.08);
  color: var(--accent-violet);
}

.info-icon-wrapper.location {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-secondary);
}

.info-content {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
}

.info-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.contact-socials-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Form styling */
.contact-form-wrapper {
  padding: 2.5rem;
  background: rgba(10, 17, 32, 0.8);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.form-group input,
.form-group textarea {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition-normal);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent-cyan);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 15px rgba(0, 242, 254, 0.1);
}

.form-submit-btn {
  width: auto;
  align-self: center;
  padding: 0.9rem 2.2rem;
}

.form-success-state {
  text-align: center;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  animation: successZoom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.success-icon {
  color: #22c55e;
  filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.3));
}

@keyframes successZoom {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 968px) {
  .contact-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .contact-form-wrapper {
    padding: 1.8rem;
  }
}
      `}</style>
    </section>
  );
};
export default Contact;
