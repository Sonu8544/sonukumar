import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
    const handleType = (count) => {
        // Access word count number
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div className='App TypeWriter'>
            <h3 style={{ margin: 'auto 0', fontWeight: 'normal', textAlign: 'center' }}>
                <span className='text-[#4db5ff]' style={{ fontWeight: '400', display: 'inline-block' }}>
                    <Typewriter
                        words={['Full Stack Developer.', 'Front End Developer.', 'Back End Developer.']}
                        loop={15}
                        cursor
                        cursorStyle={<span style={{ color: 'red', fontSize: '1.5em' }}>|</span>}
                        cursorBlinkRate={0}
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={2000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </span>
            </h3>
        </div>
    );
};

export default TypeWriter;
