import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Quiz from "../img/quiz.png"
import Spotify from '../img/spotify.png'
import Algorithm from "../img/algorithm.png";
import Watch from "../img/watch.png";
import CodeBoard from "../img/codeboard.png";
import Excel from "../img/excel.png";
import Sketch from "../img/sketch.png";
function Project({ dark }) {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    const projects = [
        {
            id: "1", heading: "Watch E-Commerce", githubLink: "https://github.com/shivam08022002/watch_store", pic: Watch,
            hostedLink: "https://watch-store-sand.vercel.app/", techStack: ["Next.js", "MUI", "Redux"], about: "An E-commerce app for watch. Users can filter the watch according to brand, price, strap and colour.Users can also add watches to their wishlists."
        }
    ]

   
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
        </div>
    )
}
export default Project;