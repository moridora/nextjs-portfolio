import React from 'react';
import { Profile } from '@/components/Profile';
import { Career } from '@/components/Career';
import { Publications } from '@/components/Publications';
import { Awards } from '@/components/Awards';
import { Grants } from '@/components/Grants'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shintaro Mori Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Profile />
      <Career />
      <Publications />
      <Awards />
      <Grants />
    </div>
  );
};
