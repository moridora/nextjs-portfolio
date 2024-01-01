// pages/_app.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import 'fontsource-poppins'; // Poppinsフォントのインポート
import '../styles/globals.css'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif', // 使用するフォントを指定
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}
