// Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background: 'linear-gradient(135deg, #467eea, #76dba2)' }}>
        <Toolbar>
          <Typography variant="h5" component="div" fontWeight="bold" flexGrow={1} sx={{ fontFamily: 'Roboto, sans-serif' }}>
            Shintaro Mori
          </Typography>
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
