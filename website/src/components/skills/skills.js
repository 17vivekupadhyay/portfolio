import React from 'react';
import styled, { keyframes } from 'styled-components';
import ModernHamburgerButton from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const scrollAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const CreditsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
`;

const CreditsWrapper = styled.div`
  animation: ${scrollAnimation} 60s linear infinite;
  color: #00ff00; /* Vibrant green color */
  padding: 2vw;
  font-family: 'Courier New', monospace;
  white-space: pre;
  line-height: 1.5;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ContactButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1.5vw 3vw;
  font-size: 1.5vw;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const creditsContent = `
  vivekupadhyay.com - A Brutalist Concept
  Produced by Vivek Upadhyay
  
  vivekupadhyay.com Features:
  - React, Node.Js, Html, CSS, JavaScript, Typescript, Jest,
    Git.
  
  Skills:
  - C++, Python, React, Node.Js, Html, CSS, JavaScript, Typescript, Jest,
    Git, Linux, R, SQL, LaTeX, Firebase, Inventor, Vex Pros.
  
  Achievements:
  - University of Waterloo President's Scholarship of Distinction
  - Co-Founder AdviceU.ca
  - Co-Founder Sites4U.ca
  - Founder @Kicksinthe6ix_
  - Vex Robotics World Division Finalist 2020
  - Vex Robotics Ontario Provincial Champion 2020
  - Vex Robotics Ontario Provincial Champion 2019
  
  Certifications: Classified
`;

const EndCredits = () => {
  return (
    <CreditsContainer>
      <ModernHamburgerButton />
      <CreditsWrapper>
        {creditsContent}
      </CreditsWrapper>
      <CreditsWrapper>
        {creditsContent}
      </CreditsWrapper>
      <CreditsWrapper>
        {creditsContent}
      </CreditsWrapper>
      <CreditsWrapper>
        {creditsContent}
      </CreditsWrapper>
      <CreditsWrapper>
        {creditsContent}
      </CreditsWrapper>
      <CreditsWrapper>
        {creditsContent}
      </CreditsWrapper>
      <ContactButton> <Link to="/contact" style={{ textdecoration: "None" }}>Contact Me</Link></ContactButton>
    </CreditsContainer>
  );
};

export default EndCredits;
