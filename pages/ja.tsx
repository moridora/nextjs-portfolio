// pages/index.tsx

import React from 'react';
import { Career } from '@/components/Career';
import { Publications } from '@/components/Publications';
import { Awards } from '@/components/Awards';
import { Grants } from '@/components/Grants';
import { Profile } from '@/components/Profile'; // 追加
import Head from 'next/head';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';

export default function Japanese() {
  return (
    <div>
      <Head>
        <title>Shintaro Mori Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container maxWidth="xl">
        <CssBaseline />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Profile />
          </Grid>
          <Grid item xs={12} md={8}>
            <Publications />
            <Career />
            <Awards />
            <Grants />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
