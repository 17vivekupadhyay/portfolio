import React from 'react';

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
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        onClick={handleResumeClick}
      >
        Resume
      </button>
      <button
        className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
        onClick={handleLearnMoreClick}
      >
        Learn More
      </button>
    </div>
  );
};

export default DiscoverButtons;
