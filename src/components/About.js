import React from 'react';
import { motion } from 'framer-motion';
import {
  SectionContainer,
  SectionTitle,
  Card,
  List
} from './shared/StyledComponents';
import styled from 'styled-components';

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(0, 77, 152, 0.2);
  border: 1px solid rgba(255, 178, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 77, 152, 0.3);
    border-color: rgba(255, 178, 0, 0.3);
  }

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  span {
    color: #FFB200;
    font-family: 'SF Mono', monospace;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const AboutText = styled.div`
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  .highlight {
    color: #FFB200;
    font-weight: 500;
  }
`;

const technologies = [
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
  { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
  {name: 'Spring Boot', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg'},
  {name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg'}
];

const About = () => {
  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <AboutText>
        <p>
          Hello! I'm <span className="highlight">Huzaifa Kiani</span>, a passionate software engineer with a deep love for both coding and soccer, especially FC Barcelona.
        </p>
        <p>
          My journey in tech has been dynamic, with each project representing a new challenge to tackle. I specialize in full-stack development, with particular expertise in:
        </p>
      </AboutText>

      <TechGrid>
        {technologies.map((tech, index) => (
          <TechItem
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </TechItem>
        ))}
      </TechGrid>

      <AboutText>
        <p>
          Key areas of expertise:
        </p>
      </AboutText>
      <List>
        <li>Full-stack web development with React, Node.js, and modern JavaScript</li>
        <li>Database management with PostgreSQL</li>
        <li>Frontend development with HTML5, CSS3, and modern frameworks</li>
        <li>Version control and collaboration using Git</li>
        <li>Responsive and interactive UI/UX design</li>
      </List>

      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutText>
          <p>
            When I'm not coding, you'll find me watching soccer matches, learning about new fragrances, or learning about new technologies.
          </p>
        </AboutText>
      </Card>
    </SectionContainer>
  );
};

export default About; 