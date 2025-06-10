import React from 'react';

const MyStory = () => {
    return (
        <div className='flex flex-col h-full w-full items-center justify-center'>
            <div className='flex flex-col w-full py-6 px-1 items-center justify-center'>
                <blockquote className='text-xl italic font-light text-center'>
                    <p>"Rooted in Goodness.</p>
                    <p>Alive with Purpose"</p>
                </blockquote>
            </div> {/* top part of view */}
            <div className='w-full px-1' style={{ aspectRatio: '23 / 9' }}>
                <img
                    src='/images/aboutme.jpeg'
                    alt='About Me'
                    className='w-full h-full object-cover rounded-sm'
                />
            </div> {/* image */}
            <div className='flex flex-row w-full py-24 h-full justify-center items-center px-8 gap-3 space-x-4'>
                <p className=' text-left text-xl font-light'>
                    Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"Rooted in Goodness.
                    Alive with Purpose"
                </p>
                <div className='h-full'>
                <p className='text-left text-sm font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p></div>
                <p className='text-left text-sm font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className='text-left text-sm font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    );
};

export default MyStory;