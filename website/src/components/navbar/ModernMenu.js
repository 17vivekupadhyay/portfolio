import React from 'react';
import './ModernMenu.css';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactsIcon from '@mui/icons-material/Contacts';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import Error from './error';

function ModernMenu({ isOpen, onClose }) {
  return (
    <div className={`modern-menu ${isOpen ? 'open' : ''}`}>
    {/*
    <div>
     <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <HomeIcon />
          <ListItemText inset>Home</ListItemText>
        </MenuItem>
        <MenuItem>
            <CodeIcon />
          <ListItemText inset>Projects</ListItemText>
        </MenuItem>
        <MenuItem>
            <ConstructionIcon />
          <ListItemText inset>Skills</ListItemText>
        </MenuItem>
        <MenuItem>
            <AccessTimeIcon />
          <ListItemText inset>Timeline</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
            <GitHubIcon />
          <ListItemText>GitHub</ListItemText>
        </MenuItem>
        <MenuItem>
            <InstagramIcon />
          <ListItemText>Instagram</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
            <ContactsIcon />
          <ListItemText>Contact</ListItemText>
        </MenuItem>
      </MenuList>
        </Paper>
      </div>
  */}
      <Error />
    </div>
  );
}

export default ModernMenu;
