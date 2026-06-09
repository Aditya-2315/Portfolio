import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Experience = ({ activeSkill }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="bg-glow-spot glow-cyan" style={{ bottom: '10%', right: '5%' }}></div>

      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-subtitle">Professional Background</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="experience-timeline">
          {resumeData.experience.map((exp) => {
            // Check if this experience is highlighted based on selected skill
            const isHighlighted = activeSkill && exp.tools.some(
              t => t.toLowerCase() === activeSkill.toLowerCase()
            );

            return (
              <div 
                key={exp.id} 
                className={`experience-card glass-card ${isHighlighted ? 'highlighted-experience' : ''}`}
              >
                <div className="experience-header">
                  <div className="experience-role-wrapper">
                    <div className="experience-icon-box">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="meta-item text-cyan">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      {exp.period}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="bullet-item">
                      <span className="bullet-icon-wrapper">
                        <CheckCircle2 size={16} />
                      </span>
                      <p className="bullet-text">{bullet}</p>
                    </li>
                  ))}
                </ul>

                <div className="experience-tools-footer">
                  <span className="tools-title">Tools Used:</span>
                  <div className="tools-list">
                    {exp.tools.map((tool) => {
                      const isSkillActive = activeSkill === tool;
                      return (
                        <span 
                          key={tool} 
                          className={`experience-tool-tag ${isSkillActive ? 'active-tool' : ''}`}
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--bg-secondary);
        }

        .experience-timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .experience-card {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
          position: relative;
          transition: all var(--transition-normal);
        }

        .experience-card.highlighted-experience {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 30px rgba(0, 242, 254, 0.15);
          transform: scale(1.02);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1.5rem;
          gap: 1.5rem;
        }

        .experience-role-wrapper {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .experience-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .experience-role {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .experience-company {
          font-size: 1.1rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .experience-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          color: var(--text-muted);
        }

        .meta-item.text-cyan {
          color: var(--accent-cyan);
        }

        .experience-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .bullet-icon-wrapper {
          color: var(--accent-cyan);
          margin-top: 0.2rem;
          display: flex;
          align-items: center;
        }

        .bullet-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .experience-tools-footer {
          border-top: 1px solid var(--glass-border);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .tools-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .tools-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .experience-tool-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-family: var(--font-sans);
          transition: all var(--transition-normal);
        }

        .experience-tool-tag.active-tool {
          background: rgba(0, 242, 254, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .experience-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .experience-meta {
            align-items: flex-start;
          }
          .experience-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Experience;
