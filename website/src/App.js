import React from 'react';
import './App.css';
import TypingAnimation from './components/typinganimation/TypingAnimation';
import DiscoverButtons from './components/discoverbuttons/DiscoverButtons';
import ModernHamburgerButton from './components/navbar/Navbar';
import SpaceInvader from './components/projects/SpaceInvader';
import projectInfoArray from './components/projects/projectinfo.tsx';

function App() {
  return (
    <div className="App">
      <div className="background-dots">
        {Array.from({ length: 50 }, (_, index) => (
          <div key={index} className="dot"></div>
        ))}
      </div>
      {
      /*
      <ModernHamburgerButton />
      <TypingAnimation className="TypingAnimation" />
      <DiscoverButtons className="DiscoverButtons" />
      */
      }
      <SpaceInvader numEnemies={projectInfoArray .length} />
    </div>
  );
}

export default App;
