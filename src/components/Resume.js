import React from 'react';
import {
  SectionContainer,
  SectionTitle,
  Card,
  Button,
  List
} from './shared/StyledComponents';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceCard = styled(Card)`
  margin-bottom: 2rem;
  background: rgba(0, 77, 152, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 178, 0, 0.1);

  &:hover {
    border-color: rgba(255, 178, 0, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(165, 0, 68, 0.3);
  }
`;

const JobTitle = styled.h3`
  color: #FFB200;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-family: 'SF Mono', monospace;
`;

const Company = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: 'SF Mono', monospace;
`;

const Duration = styled.p`
  color: rgba(255, 178, 0, 0.8);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-family: 'SF Mono', monospace;
`;

const Description = styled.div`
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Resume = () => {
  return (
    <SectionContainer>
      <SectionTitle>Experience</SectionTitle>

      <ExperienceCard
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <JobTitle>Software Engineer Intern</JobTitle>
        <Company>Nucor Business Technology</Company>
        <Duration>May 2023 - August 2023</Duration>
        <Description>
          <List>
            <li>Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL</li>
            <li>Collaborated with cross-functional teams to implement new features and improve existing functionality</li>
            <li>Participated in code reviews and contributed to team discussions on best practices</li>
            <li>Worked on optimizing database queries and improving application performance</li>
          </List>
        </Description>
      </ExperienceCard>

      <ExperienceCard
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <JobTitle>Teaching Assistant</JobTitle>
        <Company>University of Massachusetts Amherst</Company>
        <Duration>September 2022 - Present</Duration>
        <Description>
          <List>
            <li>Assisted professors in teaching programming concepts to undergraduate students</li>
            <li>Conducted office hours and review sessions to help students with assignments</li>
            <li>Graded assignments and provided constructive feedback to improve student learning</li>
            <li>Mentored students in developing their programming skills and problem-solving abilities</li>
          </List>
        </Description>
      </ExperienceCard>

      <ButtonWrapper>
        <Button
          href="https://docs.google.com/document/d/1GO4qam4x5KikUEb2Cz6WbRcCW5myFu-NNzAOmvFCoUo/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-download"></i> Download Resume
        </Button>
      </ButtonWrapper>
    </SectionContainer>
  );
};

export default Resume; 