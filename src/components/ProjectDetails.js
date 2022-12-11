import React, {useEffect, useState} from 'react';
import {Link, useLoaderData} from "react-router-dom";

const ProjectDetails = () => {
    const loaderData = useLoaderData();
    const id = loaderData.id;

    const allProjects = [
        {
            "_id": "111",
            "title": "Mobile Wizard",
            "desc": "An online used mobile phone selling website",
            "images": [
                "https://i.ibb.co/n8McX1P/1-mobile-wizard-home.png",
                "https://i.ibb.co/TWF1vNr/2-mobile-wizard-admin.png",
                "https://i.ibb.co/tqbWdrP/3-mobile-wizard-allphones.png",
                "https://i.ibb.co/zmbTXhM/4-mobile-wizard-booknow.png"
            ],
            "livelink": "https://mobile-wizard-818d2.web.app/",
            "github": [
                {
                    "linkname": "Live Link",
                    "link": ""
                },
                {
                    "linkname": "Client Side Code",
                    "link": ""
                },
                {
                    "linkname": "Server Side Code",
                    "link": ""
                }
            ],
            "features": [
                "User can sign up with Email, Password, and Google.",
                "It has some private routes only accessible by a signed user.",
                "The admin has CRUD functionality over the database."
            ],
            "tech": "React, Tailwind CSS, Tanstack Query, React-Toastify, React-Router-Dom, Firebase, Firebase Authentication. Vercel, MonogoDB, NodeJS, ExpressJS, JWT, ENV."
        },
        {
            "_id": "112",
            "title": "Vacarion",
            "desc": "A travel seekers website",
            "images": [
                "https://i.ibb.co/kXp9C8J/1-vacarion.png",
                "https://i.ibb.co/HdZbcFG/2-vacarion.png",
                "https://i.ibb.co/ZX0dPgY/3-vacarion.png",
                "https://i.ibb.co/zP8HG00/4-vacarion.png"
            ],
            "livelink": "https://vacarion.web.app/",
            "github": [
                {
                    "linkname": "Live Link",
                    "link": ""
                },
                {
                    "linkname": "Client Side Code",
                    "link": ""
                },
                {
                    "linkname": "Server Side Code",
                    "link": ""
                }
            ],
            "features": [
                "Users can sign up with Email, Password, and Google.",
                "Users can post, update, or delete a review on different services.",
                "Users can see other users' reviews."
            ],
            "tech": "React, React Icons, React-Toastify, React-Router-Dom, Firebase, Firebase Authentication. Vercel, MonogoDB, NodeJS, ExpressJS, JWT, ENV."
        },
        {
            "_id": "113",
            "title": "Skill Island",
            "desc": "An online Course website",
            "images": [
                "https://i.ibb.co/41tVwsh/1-skill-island.png",
                "https://i.ibb.co/wzFY4Kf/3-skill-island.png",
                "https://i.ibb.co/crKsGD6/2-skill-island.png"
            ],
            "livelink": "https://skill-island.web.app/",
            "github": [
                {
                    "linkname": "Live Link",
                    "link": ""
                },
                {
                    "linkname": "Client Side Code",
                    "link": ""
                },
                {
                    "linkname": "Server Side Code",
                    "link": ""
                }
            ],
            "features": [
                "User can sign up with Email, Password, or Google.",
                "User can enroll in a course, also later delete that course.",
                "Admin has CRUD functionality including adding new courses and adding a new video to existing courses."
            ],
            "tech": "React, Tailwind CSS, React-Router-Dom, Firebase, Firebase Authentication. Vercel, MonogoDB, NodeJS, ExpressJS, JWT, ENV."
        }
    ];

    const singleP = allProjects.find(p => p._id === id);
    console.log(singleP);


    return (
        <div className="container mx-auto my-24">
            <h1 className="text-5xl font-bold text-center my-5">Some Screen Shot</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    singleP.images.map((img, i) => <div key={i}>
                        <img src={img} className="border h-full w-full" alt="" />
                    </div>)
                }
            </div>

            <div>
                <h1 className="text-5xl font-bold text-center my-5">Features</h1>
                <ul>
                    {
                        singleP.features.map((f, i) =>
                            <li
                                key={i}
                                className="text-2xl"
                            >{f}</li>)
                    }
                </ul>
                <div>
                    <h1 className="text-5xl font-bold text-center my-5">Links</h1>
                    <div className="text-center flex flex-wrap gap-3 justify-center">
                        {
                            singleP.github.map((l, i) => <a
                                href={l.link}
                                className="border px-5 py-2 outline-4 rounded-3xl text-blue-500 border-blue-500"
                            >{l.linkname}</a>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;