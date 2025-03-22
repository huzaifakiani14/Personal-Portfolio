import React from 'react';
import {
  SectionContainer,
  SectionTitle,
  Form,
  Input,
  TextArea,
  Button
} from './shared/StyledComponents';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactText = styled.p`
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  .highlight {
    color: #FFB200;
    font-weight: 500;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactMethod = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FFB200;
  text-decoration: none;
  font-family: 'SF Mono', monospace;
  font-size: 1.1rem;
  padding: 1rem;
  border: 1px solid rgba(255, 178, 0, 0.2);
  border-radius: 8px;
  background: rgba(0, 77, 152, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 178, 0, 0.4);
    background: rgba(0, 77, 152, 0.3);
  }

  i {
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  return (
    <SectionContainer>
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactText>
        I'm currently looking for new opportunities! Whether you have a question, want to collaborate, 
        or just want to say hi, I'll try my best to get back to you! Just like how 
        <span className="highlight"> FC Barcelona</span> connects with their fans, I'm always excited 
        to connect with fellow developers and potential collaborators.
      </ContactText>

      <Form
        as={motion.form}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
        }}
      >
        <Input
          type="text"
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          required
        />
        <TextArea
          placeholder="Your Message"
          required
          rows={6}
        />
        <Button
          as={motion.button}
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </Button>
      </Form>

      <ContactInfo>
        <ContactMethod
          href="mailto:huzaifakiani014@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-envelope"></i>
          Email
        </ContactMethod>
        <ContactMethod
          href="https://www.linkedin.com/in/huzaifakiani/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </ContactMethod>
        <ContactMethod
          href="https://github.com/huzaifakiani14"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-github"></i>
          GitHub
        </ContactMethod>
      </ContactInfo>
    </SectionContainer>
  );
};

export default Contact; 