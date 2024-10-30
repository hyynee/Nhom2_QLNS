'use client';
import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { pink } from '@mui/material/colors';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showButton && (
        <button
          className="fixed bottom-6 right-4 h-12 w-12 rounded-full bg-purple-500 text-white"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon sx={{ color: pink[500] }} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
