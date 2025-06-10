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
            <div className="w-full flex">
      <div className="w-1/4 p-4 min-h-[200px] bg-blue-200"></div>
      <div className="w-1/4 p-4 min-h-[200px] bg-green-200">Placeholder Content 1</div>
      <div className="w-1/4 p-4 min-h-[200px] bg-yellow-200">Placeholder Content 2</div>
      <div className="w-1/4 p-4 min-h-[200px] bg-red-200">Placeholder Content 3</div>
    </div>
        </div>
    );
};

export default MyStory;