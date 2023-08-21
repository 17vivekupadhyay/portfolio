import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import the necessary components
import TypingAnimation from './components/typinganimation/TypingAnimation';
import DiscoverButtons from './components/discoverbuttons/DiscoverButtons';
import ModernHamburgerButton from './components/navbar/Navbar';
import SpaceInvader from './components/projects/SpaceInvader';
import EndCredits from './components/skills/skills';
import TimeLine from './components/timeline/timeline';
import Error from './components/navbar/error';
import projectInfoArray from './components/projects/projectinfo.tsx';
import GitHubLink from './components/github/github';
import ContactPage from './components/contactpage/ContactPage';
import UserInputComponent from './Extras/extra';
import Abyss from './Extras/Abyss/absa';

const skillsData = [
  'React',
  'JavaScript',
  'CSS',
  'HTML',
  'Node.js',
  // ...add more skills
];

function App() {
  return (
    <Router>
      <div className="App">
        <ModernHamburgerButton />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to a specific route */}
          <Route path="/home" element={<><TypingAnimation /><DiscoverButtons /></>} />
          <Route path="/projects" element={<SpaceInvader numEnemies={projectInfoArray.length} />} />
          <Route path="/skills" element={<EndCredits skills={skillsData} />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/github" element={<GitHubLink />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/extras" element={ <UserInputComponent />} />
          <Route path="/ABYSS" element={ <Abyss />} />
          <Route path="/error" element={<Error message="Oops! Something went wrong." />} />
          <Route path="*" element={<div>Page not found</div>} /> {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
