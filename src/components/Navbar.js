import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled(motion.nav)`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${props => props.scrolled ? 'rgba(24, 23, 51, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  height: 70px;
  box-shadow: ${props => props.scrolled ? '0 10px 30px -10px rgba(0, 77, 152, 0.7)' : 'none'};
`;

const Logo = styled(Link)`
  color: #FFB200;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;
  font-family: 'SF Mono', monospace;
  
  &::after {
    content: '.';
    color: #A50044;
    opacity: 0;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 1;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? '#FFB200' : '#fff'};
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
  padding: 0.5rem 0;
  font-family: 'SF Mono', monospace;

  &:hover {
    color: #FFB200;
  }

  &::before {
    content: '0' counter(item) '.';
    margin-right: 5px;
    color: #A50044;
    font-size: 0.9rem;
  }

  counter-increment: item;
`;

const ResumeButton = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  border: 1px solid #FFB200;
  border-radius: 4px;
  color: #FFB200;
  text-decoration: none;
  font-size: 0.9rem;
  margin-left: 1.5rem;
  transition: all 0.3s ease;
  font-family: 'SF Mono', monospace;

  &:hover {
    background-color: rgba(255, 178, 0, 0.1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #FFB200;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;
  padding: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #181733;
  padding: 6rem 2rem 2rem;
  width: 75vw;
  max-width: 400px;
  z-index: 100;
  counter-reset: item;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2.5rem;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ counterReset: 'item 0' }}
      >
        <Logo to="/">HK</Logo>
        <NavLinks style={{ counterReset: 'item 0' }}>
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/projects" active={location.pathname === '/projects'}>Projects</NavLink>
          <NavLink to="/resume" active={location.pathname === '/resume'}>Experience</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
          <ResumeButton 
            href="https://docs.google.com/document/d/1zG1ovULf2VTSVk9o5U_mrSgnmepCtBWg5nFMMniaF_Y/edit?tab=t.0format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </ResumeButton>
        </NavLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <NavLink to="/" active={location.pathname === '/'} onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'} onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/projects" active={location.pathname === '/projects'} onClick={() => setMobileMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/resume" active={location.pathname === '/resume'} onClick={() => setMobileMenuOpen(false)}>
              Experience
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <ResumeButton 
              href="https://docs.google.com/document/d/1zG1ovULf2VTSVk9o5U_mrSgnmepCtBWg5nFMMniaF_Y/edit?tab=t.0format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </ResumeButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 
