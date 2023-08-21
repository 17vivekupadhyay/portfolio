import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

function GitHubLink() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <GitHubIcon /> 
      <Link to="https://github.com/17vivekupadhyay">https://github.com/17vivekupadhyay</Link>
    </div>
  );
}

export default GitHubLink;
