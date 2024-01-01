// pages/awards.tsx
import React from 'react';
import { MyContainer } from './MyContainer';

export function Awards() {
  const sections = [
    {
      sectionTitle: '',
      items: [
        {
          title: 'Paper Presentation Award',
          subheader: 'March 2022',
          description: `At the 2021 IEEJ Kansai Branch the College of Technology Graduation Research Presentation , I was awarded the Paper Presentation Award. `,
        },
        {
          title: 'Outstanding Academic Achievement Award',
          subheader: 'March 2022',
          description: 'I graduated as the top student from the Electronic Engineering Department at Kobe City College of Technology.',
        },
      ],
    },
  ];

  return <MyContainer title="Awards" sections={sections} backgroundColor="linear-gradient(135deg, #26c6da, #764ba2)" />;
}

