import React from 'react';
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';

const Skills = () => {
    return (
        <div className="bg-cyan-400 text-white">
            <div className="container mx-auto flex flex-col items-center p-5  pt-24 pb-40  my-10">
                <div className="conatiner mx-auto text-center w-1/2">
                    <h2 className="text-5xl font-semibold">Services</h2>
                </div>
                <div className="container mx-auto mt-24 rounded-2xl bg-white text-black shadow-md border-2 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0">
                        <div className="p-24">
                            <div className="">
                                <div className="mx-auto bg-cyan-400 rounded-full w-[100px] p-5">
                                    <img className="w-full mx-auto" src={frontend} alt="" />
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <h3 className="text-3xl font-semibold">Frontend</h3>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="mt-8">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            </div>
                        </div>
                        <div className="p-24">
                            <div className="">
                                <div className="mx-auto bg-cyan-400 rounded-full w-[100px] p-5">
                                    <img className="w-full mx-auto" src={backend} alt="" />
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <h3 className="text-3xl font-semibold">Backend</h3>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="mt-8">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;