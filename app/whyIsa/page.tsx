import React from 'react';
import VisualHighlightv2 from '@/components/visual-highlightv2';
import VisualHighlightv3 from '@/components/visual-highlightv3';
import Header from '@/components/header';

const WhyIsaPage: React.FC = () => {
    return (
        <div>
            <Header />
            <VisualHighlightv2 />
            <VisualHighlightv3 />
        </div>
    );
};

export default WhyIsaPage;