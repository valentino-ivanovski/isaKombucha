"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import Card1 from '@/storyComponents/card1';
import Card2 from '@/storyComponents/card2';
import Card3 from '@/storyComponents/card3';
import Card4 from '@/storyComponents/card4';
import Card5 from '@/storyComponents/card5';
import Footer from '@/components/Footer';

const MyStoryPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className="flex flex-col min-h-screen px-1">
      <Header />
      <main>
        <Card1 isMobile={isMobile} />
        <Card2 /> 
        <Card3 />
        <Card4 />
        <Card5 /> 
        <Footer />
      </main>
    </div>
  );
};

export default MyStoryPage;