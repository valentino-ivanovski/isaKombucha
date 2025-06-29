"use client";

import React from 'react';
import VisualHighlightv2 from '@/components/visual-highlightv2';
import VisualHighlightv3 from '@/components/visual-highlightv3';
import Header from '@/components/header';
import { useEffect, useState } from 'react';

const WhyIsaPage: React.FC = () => {
    const [screenSize, setScreenSize] = useState<string>("");

    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenSize("sm");
            } else if (width < 768) {
                setScreenSize("sm");
            } else if (width < 1024) {
                setScreenSize("md");
            } else if (width < 1280) {
                setScreenSize("lg");
            } else if (width < 1536) {
                setScreenSize("xl");
            } else {
                setScreenSize("2xl"); // Optional: Add for very large screens
            }
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return (
        <div>
            <Header />
            <VisualHighlightv2 />
            <VisualHighlightv3 />
            <div className="fixed bottom-2 left-2 z-50 bg-black text-white text-xs px-2 py-1 rounded opacity-70">
                {screenSize}
            </div>
        </div>
    );
};

export default WhyIsaPage;