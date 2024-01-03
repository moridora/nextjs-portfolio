import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ButtonProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

export function IconButton({ to, icon, text, backgroundColor, textColor }: ButtonProps): JSX.Element {
  return (
    <Link href={to} target="_blank" passHref>
      <Button
        color="inherit"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
          background: backgroundColor || '#007bff',
          '&:hover': {
            background: 'linear-gradient(135deg, #007bff77, #3300c177)', // ホバー時の背景色
          },
          color: textColor || '#fff',
        }}
      >
        {icon}
        <Typography
          component="div"
          fontWeight="bold"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'block' },
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {text}
        </Typography>
      </Button>
    </Link>
  );
}
