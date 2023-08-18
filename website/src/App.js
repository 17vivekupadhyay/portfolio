import React from 'react';
import './App.css';
import TypingAnimation from './components/typinganimation/TypingAnimation';
import DiscoverButtons from './components/discoverbuttons/DiscoverButtons';
import ModernHamburgerButton from './components/navbar/Navbar';



function App() {
  return (
    <div className="App">
      <ModernHamburgerButton />
      <TypingAnimation className="TypingAnimation" />
      <DiscoverButtons className="DiscoverButtons" />
    </div>
  );
}

export default App;
