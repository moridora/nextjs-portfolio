// pages/Grants.tsx
import React from 'react';
import { MyContainer } from './MyContainer';

export function Grants() {
  const sections = [
    {
      sectionTitle: '',
      items: [
        {
          title: (
            <>
              Teraura Scholarship Foundation
            </>
          ),
          subheader: 'April 2022 - March 2024',
          description: '50,000 JPY/month',
        },
      ],
    },
  ];

  return <MyContainer title="Scholarships" sections={sections} backgroundColor="linear-gradient(135deg, #764ba2, #709b02)" />;
}

