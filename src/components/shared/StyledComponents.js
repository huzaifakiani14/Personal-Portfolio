import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  background: rgba(24, 23, 51, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 178, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #004D98, #A50044, #FFB200);
  }
`;

export const SectionTitle = styled.h2`
  color: #FFB200;
  font-family: 'SF Mono', monospace;
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 12px;
    opacity: 0.8;
  }
`;

export const Card = styled(motion.div)`
  background: rgba(0, 77, 152, 0.3);
  border: 1px solid rgba(255, 178, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 77, 152, 0.4);
    border-color: rgba(255, 178, 0, 0.4);
    transform: translateY(-5px);
  }
`;

export const Button = styled(motion.a)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid #FFB200;
  border-radius: 4px;
  color: #FFB200;
  text-decoration: none;
  font-family: 'SF Mono', monospace;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 178, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(165, 0, 68, 0.2);
  border: 1px solid rgba(165, 0, 68, 0.3);
  border-radius: 15px;
  color: #FFB200;
  font-size: 0.8rem;
  margin: 0.25rem;
  font-family: 'SF Mono', monospace;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const TextHighlight = styled.span`
  color: #FFB200;
  font-weight: 500;
`;

export const Link = styled.a`
  color: #FFB200;
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #A50044;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #A50044;
    
    &::after {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const Input = styled.input`
  background: rgba(24, 23, 51, 0.7);
  border: 1px solid rgba(255, 178, 0, 0.2);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  color: #fff;
  font-family: 'SF Mono', monospace;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFB200;
    box-shadow: 0 0 0 2px rgba(255, 178, 0, 0.1);
  }
`;

export const TextArea = styled.textarea`
  background: rgba(24, 23, 51, 0.7);
  border: 1px solid rgba(255, 178, 0, 0.2);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  color: #fff;
  font-family: 'SF Mono', monospace;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFB200;
    box-shadow: 0 0 0 2px rgba(255, 178, 0, 0.1);
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;

    &::before {
      content: '⚽';
      position: absolute;
      left: 0;
      color: #FFB200;
      font-size: 0.8rem;
    }
  }
`; 