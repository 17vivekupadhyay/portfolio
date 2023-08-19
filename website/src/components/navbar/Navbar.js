import React, { useState } from 'react';
import ModernMenu from './ModernMenu';
import './Navbar.css';

function ModernHamburgerButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-container ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
      <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ModernMenu isOpen={menuOpen} />
    </div>
  );
}

export default ModernHamburgerButton;
