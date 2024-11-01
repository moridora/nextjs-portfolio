// components/Footer.tsx
import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        background: 'linear-gradient(180deg, rgba(70, 126, 234, 0.0), #76dba266)',
        color: '#fff',
        textAlign: 'center',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60px', // 任意の高さを指定

      }}
    >
      <Container>
        <Link href="https://www.linkedin.com/in/shintaro-mori/" target="_blank" rel="noopener noreferrer" passHref>
          <IconButton sx={{ color: 'textSecondary' }}>
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link href="https://www.X.com/moridorazombie" target="_blank" rel="noopener noreferrer" passHref>
          <IconButton sx={{ color: 'textSecondary' }}>
            <XIcon />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/mamimume_mori" target="_blank" rel="noopener noreferrer" passHref>
          <IconButton sx={{ color: 'textSecondary' }}>
            <InstagramIcon />
          </IconButton>
        </Link>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Shintaro Mori
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          This website uses Google Analytics to analyze the user behavior.
        </Typography>
      </Container>
    </Box>
  );
}
