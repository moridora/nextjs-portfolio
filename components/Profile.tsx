// pages/profile.tsx
import React from 'react';
import { MyContainer } from './MyContainer';

export function Profile() {
  const sections = [
    {
      sectionTitle: '',
      items: [
        {
          title: 'About Me',
          subheader: '',
          description: `I am a senior undergraduate student in the School of Informatics, College of Media Arts, Science and Technology at the University of Tsukuba. `,
        },
        {
          title: 'Interests',
          subheader: '',
          description: 'I am interested in remote collaboration for skill acquisition by means of AR(augmented reality), electrical muscle stimulation.',
        },
      ],
    },
  ];

  return <MyContainer title="Profile" sections={sections} backgroundColor="linear-gradient(135deg, #667eea, #764ba2)" />;
}

