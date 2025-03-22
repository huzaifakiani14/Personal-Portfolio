import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #181733;
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(24, 23, 51, 0.97) 0%, 
      rgba(0, 77, 152, 0.95) 50%, 
      rgba(165, 0, 68, 0.93) 100%
    );
    z-index: 0;
  }

  &::after {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
    pointer-events: none;
  }

  /* Soccer ball animation */
  @keyframes floatBall {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(100px, 50px) rotate(90deg);
    }
    50% {
      transform: translate(200px, 0) rotate(180deg);
    }
    75% {
      transform: translate(100px, -50px) rotate(270deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }

  .soccer-ball {
    position: fixed;
    width: 60px;
    height: 60px;
    background-image: url('https://www.pngall.com/wp-content/uploads/2016/05/Soccer-Ball-PNG-Image.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: floatBall 15s infinite linear;
    opacity: 0.15;
    z-index: 1;
    pointer-events: none;
  }

  .ball-1 { 
    top: 10%; 
    left: 10%; 
    animation-delay: 0s;
    width: 70px;
    height: 70px;
  }
  
  .ball-2 { 
    top: 30%; 
    right: 20%; 
    animation-delay: -5s;
    width: 50px;
    height: 50px;
  }
  
  .ball-3 { 
    bottom: 20%; 
    left: 30%; 
    animation-delay: -8s;
    width: 40px;
    height: 40px;
  }
`;

const MainContent = styled.main`
  padding-top: 70px;
  position: relative;
  z-index: 2;
  
  /* Section styling */
  section {
    background: rgba(24, 23, 51, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 178, 0, 0.1);
    border-radius: 10px;
    padding: 2rem;
    margin: 2rem;
    
    h2 {
      color: #FFB200;
      font-family: 'SF Mono', monospace;
      margin-bottom: 1.5rem;
      
      &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 10px;
        opacity: 0.8;
      }
    }
    
    p {
      color: #fff;
      line-height: 1.6;
    }
    
    a {
      color: #FFB200;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #A50044;
      }
    }
  }
`;

const SocialLinks = styled.div`
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #FFB200; /* Barcelona gold */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: #FFB200; /* Barcelona gold */
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 10px;

  &:hover {
    color: #A50044; /* Barcelona red */
    transform: translateY(-3px);
  }
`;

const EmailLink = styled.div`
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  a {
    color: #FFB200; /* Barcelona gold */
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 10px;

    &:hover {
      color: #A50044; /* Barcelona red */
      transform: translateY(-3px);
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #FFB200; /* Barcelona gold */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <div className="soccer-ball ball-1" />
        <div className="soccer-ball ball-2" />
        <div className="soccer-ball ball-3" />
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <SocialLinks>
          <SocialLink href="https://github.com/huzaifakiani14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/huzaifakiani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </SocialLink>
        </SocialLinks>
        <EmailLink>
          <a href="mailto:huzaifakiani014@gmail.com">huzaifakiani014@gmail.com</a>
        </EmailLink>
      </AppContainer>
    </Router>
  );
}

export default App;
