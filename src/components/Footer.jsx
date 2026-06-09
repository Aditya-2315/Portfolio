import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { resumeData } from '../data/resumeData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Aditya</span>
            <span className="logo-bracket">/&gt;</span>
          </div>

          <div className="footer-links">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
          </div>

          <div className="footer-socials">
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${resumeData.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Aditya Chaudhary. All rights reserved.
          </p>
          <p className="credit">
            Designed &amp; Engineered with <span className="heart">&hearts;</span> &amp; ReactJS
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          background: hsl(222, 47%, 5%);
          border-top: 1px solid var(--glass-border);
          padding: 4rem 0 2rem;
          color: var(--text-muted);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
        }

        .footer-socials {
          display: flex;
          gap: 1.2rem;
        }

        .footer-socials a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .footer-socials a:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.05);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
        }

        .heart {
          color: #ff3366;
          display: inline-block;
          animation: heartbeat 1.5s infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .footer-links {
            justify-content: center;
            gap: 1.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
