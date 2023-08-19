import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import error from './hi.png';
import StyledHeaderButtons from './HeaderButtons';

function lineBreak(str) {
  return str.split('\n').map((s, i) => (
    <p key={i} className="error__message">
      {s}
    </p>
  ));
}

function Error({ onClose, message = "Hi There!" }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    try {
      //new Audio(errorSoundSrc).play();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const boundingRect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX + boundingRect.left,
      y: e.clientY + boundingRect.top,
    });
  };
  
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
  
      const maxX = window.innerWidth - e.currentTarget.offsetWidth;
      const maxY = window.innerHeight - e.currentTarget.offsetHeight;
  
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));
  
      e.currentTarget.style.left = `${boundedX}px`;
      e.currentTarget.style.top = `${boundedY}px`;
    }
  };
  

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <StyledHeaderButtons />
      <div className="error__top">
        <img src={error} alt="error" className="error__img" />
        <div className="error__messages">{lineBreak(message)}</div>
      </div>
      <div className="error__bottom">
        <div onClick={onClose} className="error__button">
          <span className="error__confirm">About</span>
        </div>
        <div onClick={onClose} className="error__button">
          <span className="error__confirm">Projects</span>
        </div>
        <div onClick={onClose} className="error__button">
          <span className="error__confirm">Skills</span>
        </div>
        <div onClick={onClose} className="error__button">
          <span className="error__confirm">Timeline</span>
        </div>
        <div onClick={onClose} className="error__button">
          <span className="error__confirm">Github</span>
        </div>
        <div onClick={onClose} className="error__button">
          <span className="error__confirm">Get in Touch</span>
        </div>
        <div onClick={onClose} className="error__button" style={{ gridColumn: 'span 3' }}>
            <span className="error__confirm">Extras</span>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-color: #f5f5f5;
  width: 300px; /* Change to your desired width */
  height: auto;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  border: 3px solid #0054e9;
  position: absolute;
  left: 0; /* Adjust this based on your needs */
  top: 0; /* Adjust this based on your needs */
  z-index: 1000;

justify-content: flex-end;
  .error__top {
    display: flex;
    flex: 1;
  }
  .error__img {
    width: 30px;
    height: 30px;
  }
  .error__messages {
    padding: 2px 20px 12px;
  }
  .error__message {
    line-height: 16px;
  }
  .error__bottom {
    display: grid;
    grid-template-columns: repeat(3, 80px); /* Adjust the column width as needed */
    gap: 10px; /* Adjust the gap between items as needed */
    justify-content: center;
    align-items: center;
  }
  
  .error__button {
    width: 80px;
    height: 22px;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    box-shadow: inset -1px -1px 1px black;
    &:hover:active {
      box-shadow: inset 1px 1px 1px black;
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  
  .nth-child(7) {
    grid-column: span 3; /* This spans three columns */
  }
  .error__confirm {
    line-height: 11px;
  }
`;

export default Error;
