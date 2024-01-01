// MySection.tsx
import React from 'react';
import { MyCard } from './MyCard';
import { Typography } from '@mui/material';

interface MySectionProps {
  section: {
    sectionTitle: string;
    items: {
      title: string | JSX.Element;
      subheader: string;
      description: string | JSX.Element;
    }[];
  };
}

export function MySection({ section }: MySectionProps) {
  return (
    <div>
      {section.sectionTitle.length > 0 && (
        <Typography
          variant="h3"
          component="div"
          sx={{
            marginBottom: 2, fontWeight: 'bold', paddingBottom: '0.5rem',
            '@media (max-width: 600px)': {
              fontSize: '2rem', // スマホの場合のフォントサイズ
            },
            '@media (max-width: 300px)': {
              fontSize: '1.5rem', // スマホの場合のフォントサイズ
            },
          }}
        >
          {section.sectionTitle}
        </Typography>
      )}
      {section.items.map((item, index) => (
        <MyCard key={index} {...item} />
      ))}
    </div>
  );
}
