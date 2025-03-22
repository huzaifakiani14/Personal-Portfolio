import React from 'react';
import {
  SectionContainer,
  SectionTitle,
  Card,
  Grid,
  Tag,
  Button
} from './shared/StyledComponents';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(0, 77, 152, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 178, 0, 0.1);

  &:hover {
    border-color: rgba(255, 178, 0, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -15px rgba(165, 0, 68, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  color: #FFB200;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'SF Mono', monospace;
`;

const ProjectDescription = styled.p`
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const projects = [
  {
    title: "LeetBank",
    description: "A comprehensive platform for tracking and managing LeetCode practice problems. Features include progress tracking, problem categorization, personal notes, and a clean interface for organizing your coding journey.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/rahmanMian/LeetBank",
    live: "https://leetbankclient.vercel.app/"
  },
  {
    title: "Lock-in-o-clock",
    description: "A modern Pomodoro timer application with features like customizable work sessions, break intervals, and progress tracking. Built with clean UI and smooth animations for an enhanced user experience.",
    tags: ["React", "Next.js", "JavaScript", "CSS", "Local Storage"],
    github: "https://github.com/huzaifakiani14/Lockin-O-Clock",
    live: "https://lockin-o-clock.vercel.app/"
  },
  {
    title: "Ski Resort App",
    description: "An interactive ski resort finder application featuring real-time weather updates, trail conditions, and resort information. Integrates with Google Places API for accurate location data and resort details.",
    tags: ["React", "Python", "Flask", "Google Places API", "spaCy"],
    github: "https://github.com/huzaifakiani14/ski_resort_app",
    live: "https://ski-resort-app.vercel.app"
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, clean design, and optimal performance across all devices.",
    tags: ["React", "JavaScript", "Styled Components", "Framer Motion"],
    github: "https://github.com/huzaifakiani14/Website",
    live: "https://huzaifakiani14.github.io/Website/"
  }
];

const Projects = () => {
  return (
    <SectionContainer>
      <SectionTitle>Featured Projects</SectionTitle>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TagContainer>
              {project.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
            <ButtonContainer>
              <Button
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i> GitHub
              </Button>
              <Button
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </Button>
            </ButtonContainer>
          </ProjectCard>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Projects; 