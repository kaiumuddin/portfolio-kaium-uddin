import React from 'react';
import profilephoto from '../assets/profilephoto.png';

const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col items-center gap-7 mt-32">
            <h1 className="text-5xl font-extrabold">Full Stack Web Developer</h1>
            <h3 className="text-2xl">I am a coder and I love what I do.</h3>
            <img className="mt-5 rounded-full w-[500px]" src={profilephoto} alt="" />
        </div>
    );
};

export default Banner;