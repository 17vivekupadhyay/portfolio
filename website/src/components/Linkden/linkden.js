import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function LinkedInLink() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LinkedInIcon /> 
      <Link to="https://www.linkedin.com/in/vivekupadhyay1/">https://www.linkedin.com/in/vivekupadhyay1/</Link>
    </div>
  );
}

export default LinkedInLink;
