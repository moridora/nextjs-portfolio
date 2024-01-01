// components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image'; // Image コンポーネントをインポート

// 画像のインポート
import ScrollToTopIcon from '../public/assets/dora.png'; // 画像のパスに置き換える

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Tooltip title="Scroll to Top" arrow>
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        sx={{
          backgroundColor: 'transparent',
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        {/* Image コンポーネントを使用 */}
        <Image src={ScrollToTopIcon} alt="Scroll to Top" width={50} height={50} />
      </Fab>
    </Tooltip>
  );
}
