// MyContainer.tsx
import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { MySection } from './MySection';

interface CardItem {
  title: string | JSX.Element;
  subheader: string;
  description: string | JSX.Element;
}

interface Section {
  sectionTitle: string;
  items: CardItem[];
}

interface MyContainerProps {
  title: string;
  sections: Section[];
  backgroundColor?: string;
}

export function MyContainer({ title, sections, backgroundColor = 'linear-gradient(135deg, #ffeb3b, #ffc107)' }: MyContainerProps) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <Container
        maxWidth="md"
        sx={{
          marginTop: 5,
          background: backgroundColor,
          color: '#fff',
          padding: 3,
          borderRadius: 6,
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
        }}
      >
        <CssBaseline />
        <Typography
          variant="h2"
          component="div"

          sx={{
            marginBottom: 2, fontWeight: 'bold', borderBottom: '2px solid #fff', paddingBottom: '0.5rem',
            '@media (max-width: 600px)': {
              fontSize: '2.5rem', // スマホの場合のフォントサイズ
            },
            '@media (max-width: 300px)': {
              fontSize: '2rem', // スマホの場合のフォントサイズ
            },
          }}
        >
          {title}
        </Typography>

        {sections && sections.length > 0 && (
          <div>
            {sections.map((section, index) => (
              <MySection key={index} section={section} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
