// pages/contact.tsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ marginTop: 5 }}>
        <Typography variant="h2" component="div" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to reach out! You can contact me via email or social media.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Back to Home
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
