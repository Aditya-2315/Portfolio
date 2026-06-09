import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { Github } from './BrandIcons';
import { resumeData } from '../data/resumeData';

export const Projects = ({ activeSkill }) => {
  const [expandedProj, setExpandedProj] = useState({});

  const toggleExpand = (id) => {
    setExpandedProj((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="bg-glow-spot glow-violet" style={{ top: '15%', left: '5%' }}></div>

      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-subtitle">Portfolio Showcases</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid grid-2">
          {resumeData.projects.map((proj) => {
            const isExpanded = !!expandedProj[proj.id];
            
            // Check if project should highlight based on active skill selection
            const isHighlighted = activeSkill && proj.tools.some(
              t => t.toLowerCase() === activeSkill.toLowerCase()
            );

            return (
              <div
                key={proj.id}
                className={`project-card glass-card ${isHighlighted ? 'highlighted-project' : ''}`}
              >
                {/* Decorative header */}
                <div className="project-banner">
                  <span className="project-type-tag">
                    <Layers size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {proj.type}
                  </span>
                  <div className="project-header-actions">
                    {proj.github && (
                      <a 
                        href={proj.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-action-link"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {proj.demo && (
                      <a 
                        href={proj.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-action-link"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-description">{proj.description}</p>
                  
                  {/* Collapsible Details */}
                  <div className={`project-collapsible ${isExpanded ? 'expanded' : ''}`}>
                    <div className="project-details-content">
                      <h4 className="details-header-title">Key Implementations:</h4>
                      <ul className="project-bullets">
                        {proj.bullets.map((bullet, index) => (
                          <li key={index} className="bullet-item">
                            <span className="bullet-icon-wrapper">
                              <CheckCircle2 size={15} />
                            </span>
                            <p className="bullet-text">{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="project-expand-btn"
                    onClick={() => toggleExpand(proj.id)}
                  >
                    <span>{isExpanded ? 'Hide Technical Details' : 'View Technical Details'}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                <div className="project-footer">
                  <div className="project-tools-list">
                    {proj.tools.map((tool) => {
                      const isSkillActive = activeSkill === tool;
                      return (
                        <span
                          key={tool}
                          className={`project-tool-tag ${isSkillActive ? 'active-tool' : ''}`}
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
        .projects-section {
          background-color: var(--bg-primary);
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(255, 255, 255, 0.01);
          overflow: hidden;
          transition: all var(--transition-normal);
        }

        .project-card.highlighted-project {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 30px rgba(0, 242, 254, 0.15);
          transform: scale(1.02);
        }

        .project-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.8rem 0.5rem;
        }

        .project-type-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          padding: 0.3rem 0.8rem;
          border-radius: 99px;
          text-transform: uppercase;
        }

        .project-header-actions {
          display: flex;
          gap: 1rem;
        }

        .project-action-link {
          color: var(--text-muted);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-action-link:hover {
          color: var(--accent-cyan);
          transform: scale(1.1);
        }

        .project-body {
          padding: 1rem 1.8rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.6rem;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .project-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* Collapsible panels styling */
        .project-collapsible {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
        }

        .project-collapsible.expanded {
          max-height: 1000px;
          transition: max-height 0.8s cubic-bezier(1, 0, 1, 0);
        }

        .project-details-content {
          border-top: 1px dashed var(--glass-border);
          padding-top: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .details-header-title {
          font-size: 0.95rem;
          font-family: var(--font-mono);
          color: var(--accent-violet);
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .project-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .bullet-item {
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
        }

        .bullet-icon-wrapper {
          color: var(--accent-violet);
          margin-top: 0.2rem;
          display: flex;
          align-items: center;
        }

        .bullet-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .project-expand-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 0;
          margin-top: auto;
          transition: var(--transition-fast);
          align-self: flex-start;
        }

        .project-expand-btn:hover {
          color: var(--accent-cyan);
        }

        .project-footer {
          padding: 1.5rem 1.8rem;
          background: rgba(0, 0, 0, 0.15);
          border-top: 1px solid var(--glass-border);
        }

        .project-tools-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .project-tool-tag {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          transition: all var(--transition-normal);
        }

        .project-tool-tag.active-tool {
          background: rgba(0, 242, 254, 0.1);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};
export default Projects;
