import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';

export const Navbar = ({ onTerminalClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 120;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-wrapper">
          <div className="navbar-logo" onClick={() => handleLinkClick('#home')}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Aditya</span>
            <span className="logo-bracket">/&gt;</span>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <button className="navbar-terminal-btn" onClick={onTerminalClick} title="Open Dev Terminal">
              <TerminalIcon size={18} />
              <span>Shell</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="navbar-mobile-toggle">
            <button className="navbar-terminal-btn mobile-shell-btn" onClick={onTerminalClick} title="Open Dev Terminal" style={{ marginRight: '10px', padding: '6px' }}>
              <TerminalIcon size={18} />
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu" className="menu-btn">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links-wrapper">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            className="navbar-terminal-btn mobile-shell-drawer-btn"
            onClick={() => {
              setIsOpen(false);
              onTerminalClick();
            }}
          >
            <TerminalIcon size={18} />
            <span>Open Shell Terminal</span>
          </button>
        </div>
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          transition: background var(--transition-normal), border var(--transition-normal), box-shadow var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .navbar-container.scrolled {
          background: rgba(10, 17, 32, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .navbar-wrapper {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 2rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          cursor: pointer;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .logo-bracket {
          color: var(--accent-cyan);
          opacity: 0.8;
          font-weight: 500;
        }

        .logo-text {
          background: linear-gradient(135deg, var(--text-primary) 50%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navbar-desktop-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-secondary);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-violet));
          transition: width var(--transition-normal);
        }

        .nav-link.active::after, .nav-link:hover::after {
          width: 100%;
        }

        .navbar-terminal-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          color: var(--accent-cyan);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-normal);
        }

        .navbar-terminal-btn:hover {
          background: rgba(0, 242, 254, 0.15);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
          transform: translateY(-1px);
        }

        .navbar-mobile-toggle {
          display: none;
          align-items: center;
        }

        .menu-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        /* Mobile Drawer */
        .navbar-mobile-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100%;
          height: calc(100vh - var(--header-height));
          background: rgba(7, 12, 23, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          transform: translateX(100%);
          transition: transform var(--transition-normal);
          border-top: 1px solid var(--glass-border);
        }

        .navbar-mobile-drawer.open {
          transform: translateX(0);
        }

        .mobile-links-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 2rem;
          gap: 2.5rem;
          height: 100%;
        }

        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .mobile-nav-link.active, .mobile-nav-link:hover {
          color: var(--accent-cyan);
        }

        .mobile-shell-drawer-btn {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 280px;
          justify-content: center;
          padding: 0.8rem;
          font-size: 1rem;
        }

        @media (max-width: 968px) {
          .navbar-desktop-links {
            display: none;
          }
          .navbar-mobile-toggle {
            display: flex;
          }
          .navbar-wrapper {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </>
  );
};
export default Navbar;
