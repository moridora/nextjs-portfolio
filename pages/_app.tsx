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
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "./../i18n/configs"; //i18

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // 使用するフォントを指定

  },
});

export default function MyApp({ Component, pageProps }: AppProps) {


  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />
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
