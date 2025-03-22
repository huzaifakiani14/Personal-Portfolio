import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Greeting = styled(motion.div)`
  color: #64ffda;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  color: #ccd6f6;
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  color: #8892b0;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </Greeting>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Huzaifa Kiani.
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build things for the web.
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm a software engineer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </Description>
        <Button
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Check out my work!
        </Button>
      </Content>
    </HomeContainer>
  );
};

export default Home; 