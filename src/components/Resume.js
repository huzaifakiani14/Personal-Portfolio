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
            <li>Built and deployed 5 AI web apps in 5 weeks with React, Next.js, Firebase, and Vercel, using agile sprints and CI/CD pipelines.</li>
            <li>Launched a SaaS flashcard generator with 3 fellows, utilizing Llama 3.1 LLM, Groq API, and Stripe paywall.</li>
            <li>Developed a RateMyProfessor scraper + Pinecone RAG pipeline with LangChain & GPT-4o, improving query speed and relevance.</li>
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
            <li>Researched emerging blockchain technologies, assessing technical offerings and market positioning.</li>
            <li>Analyzed Web3 security competitors, mapping product features, strategy, and consumer insights to identify market disruptors.</li>
            <li>Synthesized research findings to enhance company competitiveness in the digital landscape.</li>
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
            <li>Performed comprehensive testing on Practera's recently developed automated feedback feature.</li>
            <li>Executed tests; tested functionality, effectiveness, and reliability in real-world scenarios; presented solution to CEO.</li>
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
          href="https://docs.google.com/document/d/1zG1ovULf2VTSVk9o5U_mrSgnmepCtBWg5nFMMniaF_Y/export?format=pdf"
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