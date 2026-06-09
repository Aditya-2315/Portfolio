import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowDown, Terminal as TerminalIcon } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { resumeData } from '../data/resumeData';

export const Hero = ({ onTerminalClick }) => {
  const words = ['Full Stack Developer', 'AIML Specialist', 'PWA Pioneer', 'Problem Solver'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        if (currentText === activeWord) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(100);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 40 : 100);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="bg-glow-spot glow-cyan"></div>
      <div className="bg-glow-spot glow-top-right"></div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="badge-wrapper">
            <span className="hero-badge">
              <span className="badge-pulse"></span>
              Open for Internships & Opportunities
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{resumeData.name}</span>
          </h1>

          <h2 className="hero-subtitle-container">
            I am a <span className="typewriter-text">{currentText}</span>
            <span className="cursor"></span>
          </h2>

          <p className="hero-description">
            {resumeData.about}
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              <span>View Projects</span>
              <ArrowDown size={18} />
            </button>
          </div>

          <div className="hero-socials">
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-btn">
              <Github size={20} />
            </a>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${resumeData.email}`} aria-label="Email" className="social-icon-btn">
              <Mail size={20} />
            </a>
            <a href={`tel:${resumeData.phone}`} aria-label="Phone" className="social-icon-btn">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToProjects}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 0 4rem;
          position: relative;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge-wrapper {
          margin-bottom: 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          padding: 0.5rem 1.2rem;
          border-radius: 99px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
          letter-spacing: 0.02em;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
          position: relative;
        }

        .badge-pulse::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid var(--accent-cyan);
          animation: pulse 1.5s infinite ease-out;
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 850;
        }

        .hero-subtitle-container {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .typewriter-text {
          color: var(--text-primary);
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 680px;
          line-height: 1.8;
        }

        .hero-ctas {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          width: 100%;
          justify-content: center;
        }

        .hero-socials {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition-normal);
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.05);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 242, 254, 0.1);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: var(--transition-normal);
        }

        .scroll-indicator:hover {
          color: var(--accent-cyan);
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid currentColor;
          border-radius: 20px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: currentColor;
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollMouse 1.8s infinite;
        }

        @keyframes scrollMouse {
          0% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, 15px); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-subtitle-container {
            font-size: 1.5rem;
            height: 38px;
          }
          .hero-ctas {
            flex-direction: column;
            gap: 1rem;
            max-width: 320px;
          }
          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
