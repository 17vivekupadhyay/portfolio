import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StyledHeaderButtons from '../navbar/HeaderButtons';

function lineBreak(str) {
  return str.split('\n').map((s, i) => (
    <p key={i} className="error__message">
      {s}
    </p>
  ));
}

function LearnMore({ onClose, message = "Hi There!" }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    try {
      //new Audio(errorSoundSrc).play();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const boundingRect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX + boundingRect.left,
      y: e.clientY + boundingRect.top,
    });
  };
  
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
  
      const maxX = window.innerWidth - e.currentTarget.offsetWidth;
      const maxY = window.innerHeight - e.currentTarget.offsetHeight;
  
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));
  
      e.currentTarget.style.left = `${boundedX}px`;
      e.currentTarget.style.top = `${boundedY}px`;
    }
  };
  

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const terminalMessage = `
  Welcome to a portfolio that defies the ordinary developer's website.
  Here, I've crafted an unconventional space to showcase my affinity for a web design style known as brutalist.
  Take a journey through this unique presentation and discover elements that lie beyond the conventional.

  About Me:

  Check out my GitHub: https://github.com/17vivekupadhyay

I am a dedicated student at the University of Waterloo, pursuing an Honours Mathematics degree. With a keen interest in cybersecurity and investing, I am driven to leverage my knowledge and skills in these areas. My expertise lies in full stack development, and I am currently expanding my proficiency in AI and machine learning.

In addition to my academic pursuits, I am an avid robotics enthusiast. My commitment to robotics has been recognized through notable achievements, including being a World Division Finalist for VEX Robotics and winning the Ontario Provincial Championship twice.

I possess a diverse skill set, including proficiency in Python, Solidity, React, Node, Express, R, SQL, JavaScript, HTML, CSS, as well as various other tools such as Linux and Git. These skills enable me to tackle complex projects and deliver innovative solutions.

I am highly motivated, detail-oriented, and thrive in collaborative environments. I am eager to contribute my technical acumen and passion for cybersecurity, investing, and robotics to make a meaningful impact.
  
`;

  return (
    <Div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <StyledHeaderButtons />
      <div className="error__top">
        <div className="error__messages">
          {lineBreak(message)}
          {lineBreak(terminalMessage)}
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-color: #000000; /* Black background */
  width: 800px; /* Adjust the width as needed */
  height: 600px; /* Adjust the height as needed */
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #00ff00; /* Vibrant green text color */
  display: flex;
  flex-direction: column;
  //border: 2px solid #00ff00; /* Vibrant green border */
  position: absolute;
  left: 50%; /* Center horizontally */
  top: 50%; /* Center vertically */
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: #EAF0F6;
  padding: 3px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  .error__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000080; /* Dark blue header background */
    padding: 5px 10px;
    border-bottom: 1px solid #00ff00; /* Vibrant green border */
  }

  .error__messages {
    flex: 1;
    line-height: 20px;
    padding: 10px;
    background-color: #000000; /* Black background */
    overflow-y: scroll;
  }
`;

export default LearnMore;
