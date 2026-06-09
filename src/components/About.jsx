import React from 'react';
import { BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="bg-glow-spot glow-violet" style={{ left: '10%', top: '30%' }}></div>

      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-subtitle">Biography & Academic Credentials</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Bio Story & Stats */}
          <div className="about-story-col">
            <h3 className="about-subtitle">Full Stack & Intelligent Systems</h3>
            <p className="about-story-text">
              I am a Computer Science & Engineering undergraduate specializing in Artificial Intelligence and Machine Learning (AIML) at GL Bajaj. My coding philosophy centers on merging robust, clean backend systems with highly interactive, lightning-fast frontend designs.
            </p>
            <p className="about-story-text">
              Whether building full-stack responsive web apps, structuring database schemas, configuring push notifications with Firebase FCM, or deploying microservices, I focus on delivering optimal user experience and software reliability.
            </p>

            {/* Quick Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <div className="stat-value text-cyan">2027</div>
                <div className="stat-label">Graduation Year</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-value text-violet">8.5/10</div>
                <div className="stat-label">B.Tech SGPA</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-value text-cyan">2+</div>
                <div className="stat-label">Core Web Projects</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-value text-violet">15+</div>
                <div className="stat-label">Tech Stack Tools</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="education-timeline-col">
            <h3 className="about-subtitle">Education</h3>
            <div className="timeline-container">
              {resumeData.education.map((edu, idx) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot">
                    <GraduationCap size={16} />
                  </div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header-meta">
                      <span className="timeline-period">
                        <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        {edu.period}
                      </span>
                      {idx === 0 && <span className="timeline-badge">Current</span>}
                    </div>
                    <h4 className="timeline-degree">{edu.degree}</h4>
                    <p className="timeline-institution">
                      <BookOpen size={14} style={{ marginRight: '4px', verticalAlign: 'middle', opacity: 0.8 }} />
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="timeline-details">{edu.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: start;
        }

        .about-subtitle {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .about-story-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .stat-card {
          padding: 1.5rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.02);
        }

        .stat-card:hover {
          transform: translateY(-3px);
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
          line-height: 1;
        }

        .text-cyan {
          color: var(--accent-cyan);
          text-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
        }

        .text-violet {
          color: var(--accent-violet);
          text-shadow: 0 0 15px rgba(139, 92, 246, 0.25);
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .timeline-container {
          position: relative;
          padding-left: 2rem;
          border-left: 2px dashed rgba(255, 255, 255, 0.1);
          margin-left: 10px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: calc(-2rem - 11px);
          top: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 2px solid var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
          z-index: 1;
        }

        .timeline-content {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .timeline-header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
        }

        .timeline-period {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
        }

        .timeline-badge {
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: var(--accent-violet);
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .timeline-degree {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }

        .timeline-institution {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 0.8rem;
          font-weight: 500;
        }

        .timeline-details {
          font-size: 0.85rem;
          color: var(--text-muted);
          border-top: 1px solid var(--glass-border);
          padding-top: 0.6rem;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};
export default About;
