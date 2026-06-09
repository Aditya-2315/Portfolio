import React from 'react';
import { Sparkles, Code2, Database, ShieldAlert, Cpu, Hammer, Cloud } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Skills = ({ activeSkill, setActiveSkill }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 size={20} />;
      case 'Frameworks & Libraries':
        return <Cpu size={20} />;
      case 'DevOps & Cloud':
        return <Cloud size={20} />;
      case 'Tools & Platforms':
        return <Hammer size={20} />;
      case 'Databases':
        return <Database size={20} />;
      case 'Concepts':
      default:
        return <Sparkles size={20} />;
    }
  };

  const handleSkillClick = (skill) => {
    if (activeSkill === skill) {
      setActiveSkill(null); // toggle off
    } else {
      setActiveSkill(skill);
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-subtitle">Proficiencies & Tech Stack</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="skills-instruction">
            {activeSkill ? (
              <span>
                Showing where <strong className="text-cyan">{activeSkill}</strong> is used.{' '}
                <button className="skills-reset-btn" onClick={() => setActiveSkill(null)}>
                  Clear selection
                </button>
              </span>
            ) : (
              'Click any skill tag to highlight where it was used in projects or experience.'
            )}
          </p>
        </div>

        <div className="skills-grid grid-3">
          {resumeData.skillsData.map((categoryCard) => (
            <div key={categoryCard.category} className="skills-category-card glass-card">
              <div className="category-header">
                <span className="category-icon">{getCategoryIcon(categoryCard.category)}</span>
                <h3 className="category-title">{categoryCard.category}</h3>
              </div>
              <div className="skills-list">
                {categoryCard.skills.map((skill) => {
                  const isSelected = activeSkill === skill;
                  const isAnySelected = activeSkill !== null;
                  
                  return (
                    <button
                      key={skill}
                      className={`skill-tag ${isSelected ? 'active' : ''} ${
                        isAnySelected && !isSelected ? 'dimmed' : ''
                      }`}
                      onClick={() => handleSkillClick(skill)}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-primary);
        }

        .skills-instruction {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 1rem auto 0;
        }

        .skills-reset-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--accent-cyan);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.75rem;
          margin-left: 0.5rem;
          font-family: var(--font-sans);
          transition: var(--transition-fast);
        }

        .skills-reset-btn:hover {
          background: rgba(0, 242, 254, 0.1);
          border-color: var(--accent-cyan);
        }

        .skills-category-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.01);
          display: flex;
          flex-direction: column;
        }

        .skills-category-card:hover {
          transform: translateY(-5px);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 0.8rem;
        }

        .category-icon {
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
        }

        .category-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-family: var(--font-sans);
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .skill-tag:hover {
          background: rgba(0, 242, 254, 0.05);
          border-color: rgba(0, 242, 254, 0.3);
          color: var(--text-primary);
          transform: translateY(-1px);
        }

        .skill-tag.active {
          background: linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-violet) 100%);
          color: var(--bg-primary);
          border-color: transparent;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
        }

        .skill-tag.dimmed {
          opacity: 0.35;
        }

        .text-cyan {
          color: var(--accent-cyan);
        }
      `}</style>
    </section>
  );
};
export default Skills;
