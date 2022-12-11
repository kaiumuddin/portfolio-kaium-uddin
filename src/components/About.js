import React from 'react';

const About = () => {
    return (
        <div id="about" className="bg-cyan-400 text-white">
            <div className="container mx-auto flex flex-col items-center p-5 pb-40  mt-10">
                <div className="conatiner mx-auto text-center w-1/2 mt-24">
                    <h2 className="text-5xl font-semibold">About Me</h2>
                </div>
                <div className="conatiner mx-auto text-center w-1/2 mt-24">
                    <h2 className="text-4xl font-semibold">Hi, I'm Kaium. Nice to meet you.</h2>
                    <p className="text-2xl mt-5">I begin my coding journey 4 years ago, I've learned basic prohraming, Data Structure & Algorithm. For the past one year I'm learning web developement. I started with HTML, CSS, JS and continue my journey as a MERN stack developer.</p>
                </div>
            </div>
        </div>
    );
};

export default About;