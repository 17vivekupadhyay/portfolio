import React, { useState, useEffect } from 'react';
import './extra.css'; 

function HackingSimulator() {
  const targetText = '0Apq_$$yzq+BfuY(u-y$gb^nwhxotSS*zmov2oxotfp*!ux)u1';
  const [hackedText, setHackedText] = useState('');
  const [isHacking, setIsHacking] = useState(false);

  const startHacking = () => {
    setIsHacking(true);
    const intervalId = setInterval(() => {
      setHackedText(generateRandomText());
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
      setHackedText(targetText);
      setIsHacking(false);
    }, 3000);
  };

  const generateRandomText = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
    const randomText = Array.from({ length: targetText.length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
    return randomText;
  };

  const renderHackedText = () => {
    return hackedText.split('').map((char, index) => (
      <span key={index} style={char === 'A' || char === 'B' || char === 'Y' || char === 'S' ? { color: 'red' } : {}}>
        {char}
      </span>
    ));
  };

  return (
    <div>
      <button onClick={startHacking} disabled={isHacking} className='btn'>
        Generate
      </button>
      <div className="hacked-text">
        {renderHackedText()}
      </div>
    </div>
  );
}

export default HackingSimulator;
