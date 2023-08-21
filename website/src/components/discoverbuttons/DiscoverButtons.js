import React, { useState } from 'react';
import LearnMore from '../LearnMore/learnmore';
import './DiscoverButtons.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';

const DiscoverButtons = () => {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const handleResumeClick = () => {
    window.open('https://www.overleaf.com/read/gstmqwckrmpg', '_blank');
  };

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(prevState => !prevState); // Toggle the state value
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className="custom-button resume-button"
        onClick={handleResumeClick}
      >
        Resume
      </button>
      <button
        className="custom-button learn-more-button"
        onClick={handleLearnMoreClick}
      >
        Learn More
      </button>
      {isLearnMoreOpen && <LearnMore />}
    </div>
  );
};

export default DiscoverButtons;
