import React from 'react';
import './DiscoverButtons.css'; // Import your custom CSS file

const DiscoverButtons = () => {
  const handleResumeClick = () => {
    // Add functionality to open the resume
  };

  const handleLearnMoreClick = () => {
    // Add functionality to navigate to learn more page
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
    </div>
  );
};

export default DiscoverButtons;
