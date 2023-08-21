import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import spaceshipImage from './spaceship.png'; // Import the spaceship image
import enemyImage from './enemy.png'; // Import the enemy image
import TitleImage from './title.png'; // Import the title image
import projectInfoArray from './projectinfo.tsx'; // Import the project info array
import ModernHamburgerButton from '../navbar/Navbar';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
`;

const Title = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const Spaceship = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${spaceshipImage});
  background-size: cover;
  position: absolute;
  bottom: 10px;
  left: ${({ x }) => `${x}px`};
`;

const Bullet = styled.div`
  width: 4px;
  height: 10px;
  background-color: red;
  position: absolute;
  bottom: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`;

const Enemy = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${enemyImage});
  background-size: cover;
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5vw;
  cursor: pointer;
`;

const Popup = ({ onClose, project }) => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
    }}
  >
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

const SpaceInvader = ({ numEnemies }) => {
  const spaceshipSpeed = 20;
  const bulletSpeed = 10;
  const frameRate = 60;
  const bulletEnemyCollisionDistance = 60; // Adjust this distance as needed

  const [spaceshipX, setSpaceshipX] = useState(0);
  const [bullets, setBullets] = useState([]);
  const [enemyPositions, setEnemyPositions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [hitEnemyIndex, setHitEnemyIndex] = useState(null);
  const containerRef = useRef(null);

  const moveSpaceship = (direction) => {
    setSpaceshipX((prevX) => {
      const containerWidth = containerRef.current.clientWidth;
      const maxX = containerWidth - 80;
      const minX = 0;
      let newX = prevX + direction * spaceshipSpeed;
      newX = Math.max(minX, Math.min(newX, maxX));
      return newX;
    });
  };

  const moveBullets = () => {
    setBullets((prevBullets) => {
      return prevBullets
        .map((bullet) => ({
          x: bullet.x,
          y: bullet.y + bulletSpeed,
        }))
        .filter((bullet) => bullet.y > 0);
    });
  
    setEnemyPositions((prevEnemyPositions) => {
      const updatedEnemyPositions = [...prevEnemyPositions];
  
      bullets.forEach((bullet, bulletIndex) => {
        prevEnemyPositions.forEach((enemyX, enemyIndex) => {
          const bulletHitEnemyX = Math.abs(bullet.x - enemyX);
          const bulletHitEnemyY = containerRef.current.clientHeight - bullet.y;
  
          if (
            bulletHitEnemyX <= bulletEnemyCollisionDistance &&
            bulletHitEnemyY <= bulletEnemyCollisionDistance
          ) {
            console.log("hit"); // Log "hit" to the console
  
            updatedEnemyPositions[enemyIndex] = -100; // Move the enemy off-screen
  
            setBullets((prevBullets) => {
              const updatedBullets = [...prevBullets];
              updatedBullets[bulletIndex].y = -10; // Move the bullet off-screen
              return updatedBullets;
            });
  
            setShowPopup(true);
            setHitEnemyIndex(enemyIndex);
          }
        });
      });
  
      return updatedEnemyPositions;
    });
  };
  
  
  

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      moveSpaceship(-1);
    } else if (event.key === 'ArrowRight') {
      moveSpaceship(1);
    } else if (event.key === ' ') {
      handleShoot();
    }
  };

  const handleShoot = () => {
    const spaceshipPos = spaceshipX + 39;
    setBullets((prevBullets) => [
      ...prevBullets,
      { x: spaceshipPos, y: 100 },
    ]);
  };

  const updateEnemyPositions = () => {
    const container = containerRef.current;
    const availableSpace = container.clientWidth;
    const enemyWidth = 60;
    const spacing = (availableSpace - numEnemies * enemyWidth) / (numEnemies + 1);

    const dynamicEnemyPositions = Array.from(
      { length: numEnemies },
      (_, index) => spacing * (index + 1) + enemyWidth * index
    );

    setEnemyPositions(dynamicEnemyPositions);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.focus();
    const gameLoop = setInterval(() => {
      moveBullets();
    }, 1000 / frameRate);

    updateEnemyPositions(); // Initial positions

    window.addEventListener('resize', updateEnemyPositions);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('resize', updateEnemyPositions);
    };
  }, [numEnemies]);

  return (
    <Container ref={containerRef} onKeyDown={handleKeyDown} tabIndex={0}>
      <ModernHamburgerButton />
      <Title src={TitleImage} alt="Projects" />
      <Spaceship x={spaceshipX} />
      {bullets.map((bullet, bulletIndex) => (
        <Bullet key={bulletIndex} x={bullet.x} y={bullet.y} />
      ))}
      {enemyPositions.map((enemyX, enemyIndex) => (
        <Enemy
          key={enemyIndex}
          x={enemyX}
          onClick={() => {
            setShowPopup(true);
            setHitEnemyIndex(enemyIndex);
          }}
        >
          {projectInfoArray[enemyIndex]?.name}
        </Enemy>
      ))}
      {showPopup && (
        <Popup
          onClose={() => {
            setShowPopup(false);
            setHitEnemyIndex(null);
          }}
          project={projectInfoArray[hitEnemyIndex]}
        />
      )}
    </Container>
  );
};
  

export default SpaceInvader;
