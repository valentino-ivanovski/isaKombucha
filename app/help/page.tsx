import React from 'react';
import Header from '@/components/header';

const HelpPage: React.FC = () => {
    return (
        <main>
            <Header />
            <h1 className='absolute text-5xl font-semibold text-center top-28 left-0 right-0 mx-auto'>
                Frequently Asked Questions
            </h1>
        </main>
    );
};

export default HelpPage;