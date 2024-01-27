// components/MyCard.tsx
import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

interface Props {
  title: string | JSX.Element; // title は string または JSX.Element
  subheader: string;
  description: string | JSX.Element;
}


export function MyCard({ title, subheader, description }: Props) {
  return (
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.6)',
        color: '#333',
        marginBottom: 2,
        borderRadius: 6,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardHeader title={title} subheader={subheader} sx={{ borderBottom: '1px solid #ddd' }} />
      <CardContent>
        {typeof description === 'string' ? (
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
        ) : (
          description // JSX.Elementの場合はそのまま表示
        )}
      </CardContent>
    </Card>
  );
}
