import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    const resumeLink = "https://drive.google.com/file/d/1pGGWmHpJeRovtsX992dHpXRGgNQFUjaK/view?usp=sharing";

    return (
        <nav className="mx-auto container flex justify-between items-center py-3">
            <div>
                <a href="/" className="text-violet-700 font-extrabold text-4xl">KAIUM</a>
            </div>
            <div className="flex justify-between gap-5 items-center">
                <Link to="/blogs" className="px-5 py-2 outline-4 rounded-3xl text-blue-500 ">Blogs</Link>
                <a href="#about" className="px-5 py-2 outline-4 rounded-3xl text-blue-500 ">About Me</a>
                <a href={resumeLink} className="border px-5 py-2 outline-4 rounded-3xl text-blue-500 border-blue-500">My resume</a>
            </div>
        </nav>
    );
};

export default Navbar;