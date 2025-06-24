"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import AboutMeSection1 from '@/storyComponents/card1';
import Card2 from '@/storyComponents/card2';

const MyStoryPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main style={{ paddingTop: isMobile ? '110px' : '4px', paddingLeft: '4px', paddingRight: '4px' }}>
        <AboutMeSection1 isMobile={isMobile} />
        <Card2 />     
      </main>
    </div>
  );
};

export default MyStoryPage;