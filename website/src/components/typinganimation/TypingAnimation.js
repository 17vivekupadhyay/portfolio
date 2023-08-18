import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  const text = "Hey, 👋 I'm Vivek Upadhyay, a ";
  const jobTitle = "Fullstack developer.";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="typing-animation">
      <span className="typing-text">{displayText}</span>
    </div>
  );
};

export default TypingAnimation;
