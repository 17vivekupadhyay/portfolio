import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import StyledHeaderButtons from '../navbar/HeaderButtons';
import SchoolIcon from '@mui/icons-material/School';
import CakeIcon from '@mui/icons-material/Cake';
import WorkIcon from '@mui/icons-material/Work';

function TimeLine({ onClose, message = "Hi There!" }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const boundingRect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - boundingRect.left,
      y: e.clientY - boundingRect.top,
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


  const generateRandomPosition = () => {
    const maxX = window.innerWidth - 300; // Adjust these values as needed
    const maxY = window.innerHeight - 400; // Adjust these values as needed
    const randomLeft = Math.random() * maxX;
    const randomTop = Math.random() * maxY;
    return { left: randomLeft, top: randomTop };
  };

  const divs = [
    {
      title: "Started University",
      icon: <SchoolIcon />,
      date: "September 3rd 2022",
      description: "Began studying Honours Mathematics at the University of Waterloo",
    },
    {
      title: "Birthday",
      icon: <CakeIcon />,
      date: "February 27th 2004",
      description: "I was born the 27th of February 2004",
    },
    {
      title: "First Job",
      icon: <WorkIcon />,
      date: "Jun 2022 - Aug 2022",
      description: "I worked as a Code Sensei At Code Ninjas!",
    },
    {
      title: "First Company",
      icon: <WorkIcon />,
      date: "Sept 2020 - Present",
      description: "Founded @Kicksinthe6ix_, a brand which purchased, sold and consigned premium apparel.",
    },
    {
      title: "Second Company",
      icon: <WorkIcon />,
      date: "February 2021 - March 2022",
      description: "Co-founded Sites4U.ca, a purpose-driven Non-Profit Organization dedicated to crafting static websites for small businesses.",
    },
    {
      title: "Third Company",
      icon: <WorkIcon />,
      date: "Aug 2023 - Present",
      description: "Co-founded AdviceU.ca, a platform dedicated to assisting high school students with their university-related requirements and inquiries.",
    },
    {
      title: "First Internship",
      icon: <WorkIcon />,
      date: "May 2023 - Aug 2023",
      description: "Interned as a fullstack developer at Manulife as a part of the WEA Program at the University of Waterloo",
    },
  ];
  

  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  const initialDivPositions = useMemo(() => {
    return divs.map(() => generateRandomPosition());
  }, []);

  return (
    <div>
      {divs.map((div, index) => (
        <Div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            left: `${initialDivPositions[index].left}px`,
            top: `${initialDivPositions[index].top}px`,
          }}
          key={index}
        >
          <StyledHeaderButtons />
          <div className="error__top">
            <h1>{div.icon} {div.title}</h1>
          </div>
          <div className='error__messages'>
            <h1>{div.date}</h1>
            <h2>{div.description}</h2>
          </div>
          <div className="error__bottom">
            <button className='error__button' onClick={handleButtonClick}>Ok</button>
          </div>
        </Div>
      ))}
    </div>
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
    display: flex;
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

export default TimeLine;