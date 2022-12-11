import React from 'react';
import {Link} from "react-router-dom";

const Project = ({project}) => {
    const {_id, title, desc, images, livelink} = project;
    return (
        <div href={livelink} className="rounded-2x flex flex-col justify-between">
            <h1 className="text-center text-xl font-bold">{title}</h1>
            <p className="text-center">{desc}</p>
            <div className="border-2  rounded-2xl mt-2">
                <img className="w-full aspect-square rounded-2xl object-cover" src={images[0]} alt="" />
            </div>
            <Link to={`/projectdetails/${_id}`}
                className="py-5 mt-5 border rounded-full text-center text-xl hover:text-black hover:bg-blue-200"
            >
                Explore More
            </Link>
        </div>
    );
};

export default Project;