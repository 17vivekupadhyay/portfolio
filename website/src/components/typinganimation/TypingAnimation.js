import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';
import Typed from "react-typed"
import StyledHeaderButtons from '../navbar/HeaderButtons';

const TypingAnimation = () => {
  const text = "Hey, 👋 I'm Vivek Upadhyay, a Fullstack developer. ";
  const jobTitle = "";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  /*
  {
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(displayText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100); // Adjust typing speed here (milliseconds)
      return () => clearTimeout(timeoutId);
    } else if (displayText === text) {
      const jobTimeoutId = setTimeout(() => {
        setDisplayText(text + jobTitle);
      }, 500); // Adjust delay before typing job title (milliseconds)
      return () => clearTimeout(jobTimeoutId);
    }
  }, [currentIndex, displayText]);
}
*/

  return (
    <div className="typing-animation">
      <Typed className='typing-text'
      strings={[
            "Hey, 👋 I'm Vivek Upadhyay, Honours Mathematics Student at Waterloo.",
            "Hey, 👋 I'm Vivek Upadhyay, a Software Developer.",
            "Hey, 👋 I'm Vivek Upadhyay, an Aspiring Cybersecurity Consultant.",
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
        />
      <span className="cursor"></span>
    </div>
  );
};

export default TypingAnimation;
