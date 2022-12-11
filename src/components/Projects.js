import React, {useEffect, useState} from 'react';
import skill_island from '../assets/projects/skill_island.png';
import vacarion from '../assets/projects/vacarion.png';
import mobile_wizard from '../assets/projects/mobile_wizard.png';
import Project from "./Project";

const Projects = () => {

    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => {
                setAllProjects(data);
            });
    }, []);

    return (
        <div className="container mx-auto">
            <div>
                <div>
                    <h1 className="text-5xl text-center font-bold mt-24">My Recent Projects</h1>
                    <h1 className="text-3xl text-center font-semibold mb-24 mt-12">Here are a few past design projects I've worked on. Want to see more?</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        allProjects.map((p, i) => <Project key={p._id} project={p} ></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;