import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Quiz from "../img/quiz.png"
import Spotify from '../img/spotify.png'
import Algorithm from "../img/algorithm.png";
import Watch from "../img/watch.png";
import CodeBoard from "../img/codeboard.png";
import Excel from "../img/excel.png";
import Card from './card'
function Project({dark}) {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    const projects = [
        {
            id: "1", heading: "Watch E-Commerce", githubLink: "https://github.com/sanil011/watch-store", pic: Watch,
            hostedLink: "https://watch-store-sand.vercel.app/", techStack: ["Next.js", "MUI", "Redux"], about: "An E-commerce app for watch. Users can filter the watch according to brand, price, strap and colour.Users can also add watches to their wishlists."
        },
        {
            id: "2", heading: "Code Share", githubLink: "https://github.com/sanil011/code-share", pic: CodeBoard,
            hostedLink: "https://code-share-ny9d.onrender.com", techStack: ["Reactjs", "ContextApi", "Tailwindcss", "Expressjs", "Socket.io"], about: "A code editor in which by sharing the roomId you can write a code that your friend can also see in real time."
        },
        {
            id: "3", heading: "Google Doc Clone", githubLink: "https://github.com/sanil011/ExcelClone", pic: Excel,
            hostedLink: "https://sanil011.github.io/ExcelClone/", techStack: ["Javascript", "CSS", "HTML"], about: "Comprehensive Doc functionalities. Isolated cell text formatting. Cell-to-cell relationships through formulas.Download and upload capabilities.Cycle detection and formula warning.Cut, copy, paste support. Multi - sheet functionality."
        },
        {
            id: "4", heading: "Algorithm Visualizer", githubLink: "https://github.com/sanil011/Algorithm-Visualizer", pic: Algorithm,
            hostedLink: "https://algorithm-visualizer-beige.vercel.app/", techStack: ["Next", "Typescript", "Tailwind"], about: "Show the algorithm in animation how the algorithm works"
        },
        {
            id: "5", heading: "Quiz", githubLink: "https://github.com/sanil011/quiz-app", pic: Quiz,
            hostedLink: "https://quiz-app-lilac-iota.vercel.app/", techStack: ["Next", "MUI", "React-Router-Dom"], about: "A Quiz app in you can choose a lot of category and give quiz"
        },
        {
            id: "6", heading: "LYRICKS", githubLink: "https://github.com/sanil011/spotify-clone", pic: Spotify,
            hostedLink: "https://sanil-spotify-clone.netlify.app/", techStack: ["React", "MUI", "Redux", "React-Router-Dom"], about: "Fully responsive Song listening website like Spotify. Search song of their choice and according to the artist. Show popular songs according to their region using geolocation API."
        }
    ]

    const projectLess = [
        { id: "1", title: 'Calender Application', github: "https://github.com/sanil011/calender", link: "https://calender-99b907.netlify.app/", description: "Calender Application in which you can signup and login.Adding meeting , List of your all meeting,Delete a meeting,Update a specific meeting.", tech: ["React", "Firebase", "Redux"] }
        , { id: "2", title: 'Estate', github: "https://github.com/sanil011/Estates", link: "https://estates-teal.vercel.app/", description: "Fully responsive hotel booking website that i made from scratch using react,tailwind.See the hotel according to search and book them. See the amenities that give by the hotel. We can also give ratings to hotels and see the rating given by past customers.", tech: ["React", "Tailwind", "Redux", 'MUI'] }
    
    ,{
        id: "3", title: "LYRICKS", github: "https://github.com/sanil011/spotify-clone", 
            link: "https://sanil-spotify-clone.netlify.app/", tech: ["React", "MUI", "Redux", "React-Router-Dom"], description: "Fully responsive Song listening website like Spotify. Search song of their choice and according to the artist. Show popular songs according to their region using geolocation API."
        }]
    return (

        <div className="project" id="project">
            <h1 className="name">Projects</h1>
            <div className="grid   grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 ">
                {projects.map((project, idx) => (
                    <div
                        key={project?.id}
                        className="relative group  block p-2 h-full w-full cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className={`absolute inset-0 h-full w-full ${dark ? "bg-gray-200" : "bg-slate-800/[0.8]"} block  rounded-3xl`}
                                    layoutId="hoverBackground" // required for the background to follow
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <div className={`rounded-2xl h-full w-full  overflow-hidden ${dark ? "bg-gray-200" : "bg-gradient-to-br from-slate-800 to-slate-800/[0.2]"}  border border-transparent ${dark ?"group-hover:border-gray-500 border-opacity-50":"group-hover:border-slate-700"} relative z-50`}>
                            <div className="relative h-full z-50">

                                <div className="cursor-pointer flex flex-col h-full justify-between  gap-3 ">
                                    <header className='flex flex-col justify-between'>
                                        <img style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} src={project.pic} className="project-pic" alt="project-pic" />

                                        <div className='flex flex-col justify-center items-center gap-2 my-2'>
                                            <h1 className={`text-center ${dark ? "text-black" : 'text-[#9BC9E3]'}  text-xl`}>{project.heading}</h1>
                                            <div style={{ width: "3em", height: "3px", backgroundColor: "orange", }}>
                                            </div>
                                        </div>

                                        <p className={`text-base ${dark ? "text-black" : 'text-gray-300'} opacity-80 mx-4`}>
                                                {project.about}
                                            </p>
                                    </header>

                                    <footer className='px-2'>
                                        <div style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap" }}>
                                            {project.techStack?.map((db) => (
                                                <p className={`${dark ? "text-black opacity-80" : 'text-[#D8BFBE]'}`}>{db}</p>
                                            ))}
                                        </div>
                                        <nav className='mt-6 flex justify-center'>
                                            <ul className='flex w-[80%] justify-between px-4 mb-4'>
                                                <li className='flex justify-center items-center'>
                                                    <a href={project.githubLink} target="_blank">Code
                                                        <span></span><span></span><span></span><span></span>
                                                    </a>
                                                </li>
                                                <li className='flex justify-center items-center'>
                                                    <a href={project.hostedLink} target="_blank">Live
                                                        <span></span><span></span><span></span><span></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </footer>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='desktop:text-3xl tablet:text-xl text-base font-spaceFont text-center mt-16'>Other Noteworthy Projects</h1>
            <div className='grid gap-4  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 max-w-[1100px] mx-auto'>

                {projectLess.map((project) => (
                    <Card dark={dark} key={project.id} title={project.title} description={project.description} tech={project.tech} github={project.github} link={project.link} />
                ))}
            </div>
        </div>
    )
}
export default Project;