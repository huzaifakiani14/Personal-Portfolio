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
        <JobTitle>Software Engineering Fellow</JobTitle>
        <Company>Headstarter AI</Company>
        <Duration>July 2024 - September 2024</Duration>
        <Description>
          <List>
            <li>Working on AI projects and participating in hackathons</li>
            <li>Focusing on transforming startup backlogs into functional solutions</li>
            <li>Collaborating with team members on innovative AI implementations</li>
          </List>
        </Description>
      </ExperienceCard>

      <ExperienceCard
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <JobTitle>Blockchain and Web3 Security Research Extern</JobTitle>
        <Company>Webacy</Company>
        <Duration>May 2024 - July 2024</Duration>
        <Description>
          <List>
            <li>Conducted comprehensive blockchain technology analysis</li>
            <li>Assessed Web3 security competitors to enhance company competitiveness</li>
            <li>Researched and documented blockchain security best practices</li>
          </List>
        </Description>
      </ExperienceCard>

      <ExperienceCard
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <JobTitle>Artificial Intelligence Engineer</JobTitle>
        <Company>Practera</Company>
        <Duration>April 2023 - June 2023</Duration>
        <Description>
          <List>
            <li>Conducted comprehensive testing on automated feedback features</li>
            <li>Evaluated reliability through real-world scenario testing</li>
            <li>Contributed to improving AI-driven feedback systems</li>
          </List>
        </Description>
      </ExperienceCard>

      <ExperienceCard
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <JobTitle>Information Technology Intern</JobTitle>
        <Company>Agawam High School</Company>
        <Duration>September 2022 - May 2024</Duration>
        <Description>
          <List>
            <li>Collaborated with the IT department providing technical support</li>
            <li>Conducted repairs on malfunctioning computers</li>
            <li>Assisted in maintaining and upgrading school IT infrastructure</li>
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